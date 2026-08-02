import mongoose from "mongoose";

const Schema = mongoose.Schema;

const managerSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Manager", managerSchema);
/*
import mongoose from "mongoose";

schema = mongoose.Schema;

managerSchema = new schema({name,password})

*/  