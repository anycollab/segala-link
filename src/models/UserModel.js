import { Schema, model, models} from "mongoose";

const UserSchema = new Schema({
  fullName: {
    type: String,
    required: true,
    
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
    required: false,
  }
});

const schema = models.user || model("user",UserSchema);

export default schema;