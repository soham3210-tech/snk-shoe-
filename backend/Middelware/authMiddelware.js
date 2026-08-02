import jwt from "jsonwebtoken";

const jwtSecret = process.env.JWT_SECRET || "development-secret";

export default (req, res, next) => {
  const authHeader = req.header("Authorization");

  if (!authHeader) {
    return res
      .status(401)
      .json({ message: "Access denied. No token provided." });
  }

  const token = authHeader.startsWith("Bearer ")
    ? authHeader.replace("Bearer ", "").trim()
    : authHeader.trim();

  if (!token) {
    return res
      .status(401)
      .json({ message: "Access denied. No token provided." });
  }

  try {
    const decoded = jwt.verify(token, jwtSecret);
    req.user = decoded;
    next();
  } catch (ex) {
    if (ex.name === "TokenExpiredError") {
      return res.status(401).json({ message: "Token expired." });
    }
    return res.status(400).json({ message: "Invalid token." });
  }
};
/*
jwtwebtoken middleware function
jwtSecret is set from environment variable or default value

export default function(req, res, next) {}
    get Authorization header from request

    if no Authorization header, return 401 with message "Access denied. No token provided."

    extract token from Authorization header (remove "Bearer " prefix if present)

    if no token, return 401 with message "Access denied. No token provided."

    try
       verify the token using jwt.verify with jwtSecret

       if verification successful, set req.user to decoded token payload

       call next() to proceed to next middleware
    catch
       if error is TokenExpiredError, return 401 with message "Token expired."
       else return 400 with message "Invalid token."




*/