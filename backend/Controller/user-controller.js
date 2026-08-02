import User from "../Models/User.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

export const getMyUsers = async (req, res, next) => {
  let users;

  try {
    users = await User.find();
  } catch {
    return res.status(404).json({ message: "User not found add user" });
  }

  return res.status(200).json({ users });
};
/*
export const getMyUsers = async (req, res, next) => {}
  try
    let users
    users = await User.find()
   catch  user not found add user
  response with users

*/
const jwtSecret = process.env.JWT_SECRET || "development-secret";

export const signup = async (req, res, next) => {
  try {
    const { name, email, password, profileImg } = req.body;
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: "Email already exists." });
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const user = new User({ name, email, password: hashPassword, profileImg });
    await user.save();

    const token = jwt.sign({ _id: user._id }, jwtSecret);
    res.status(201).json({ token, user });
  } catch (error) {
    if (error.code === 11000 && error.keyPattern.email) {
      return res.status(400).json({ message: "Email already exists." });
    }
    res.status(500).json({ message: "Internal server error" });
  }
};

/*
signup function  {export const signup = async (req, res, next) => {}}
 try 
    name email password profileImg from req.body

    check if user already exists with the same email
           if exists return 400 with message "Email already exists."
    hash the password using bcrypt

    create a new user with name, email, hashed password, and profileImg

    save the user to the database

    generate a JWT token with user's _id

    return 201 with token and user data
 catch 
    if error is duplicate key error for email return 400 with message "Email already exists."
    else return 500 with message "Internal server error"









*/

























export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User does not exists",
      });
    }

    const checkMatchPass = await bcrypt.compare(password, user.password);

    if (!checkMatchPass) {
      return res.status(400).json({
        success: false,
        message: "Passwords do not match",
      });
    }

    const token = jwt.sign({ _id: user._id }, jwtSecret);
    res.status(201).json({
      token,
      user: {
        name: user.name,
        email: user.email,
        profileImg: user.profileImg,
        _id: user._id,
      },
    });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};
/*
  login function.  { export const login =async(req,res,nex)=>{}}
    try
       name email from req.body

       find the user by email

       if user not found return 404 with message "User does not exists"

       compare the provided password with the stored hashed password using bcrypt

       if passwords do not match return 400 with message "Passwords do not match"

       generate a JWT token with user's _id

       return 201 with token and user data (name, email, profileImg, _id)
    catch
       return 500 with message "Internal server error"



*/





















export const updateProfileImage = async (req, res, next) => {
  try {
    const { email, profileImg } = req.body;
    const user = await User.findOneAndUpdate(
      { email: email },
      { profileImg: profileImg },
      { new: true },
    );

    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    res
      .status(200)
      .json({ message: "Profile image updated successfully.", user });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

/*
  updateProfileImage function.  { export const updateProfileImage = async (req, res, next) => {}}
    try
       email profileImg from req.body

       find the user by email and update the profileImg

       if user not found return 404 with message "User not found."

       response 200 with message "Profile image updated successfully." and updated user data
    catch
       return 500 with message "Internal server error" 


*/















export const resetPassword = async (req, res, next) => {
  const { email, newPassword } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    user.password = await bcrypt.hash(newPassword, 10);

    await user.save();

    return res.status(200).json({ message: "Password updated successfully." });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};
/*
  resetPassword function.  { export const resetPassword = async (req, res, next) => {}}
    try
       email newPassword from req.body

       find the user by email

       if user not found return 404 with message "User not found."

       hash the new password using bcrypt and update the user's password

       save the updated user

       response 200 with message "Password updated successfully."
    catch
       return 500 with message "Internal server error"



*/