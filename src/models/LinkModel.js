import { Schema, models, model } from "mongoose";

const LinkSchema = new Schema({
  title: {
    type: string,
    required: true
  },
  url: {
    type: string,
    required: true
  },
  icon: {
    type: string,
    required: true
  },
  classNames: {
    type: array,
    required: true,
    default: [] 
  },
  target: {
    type: string,
    required: true
  }
});

const schema = models.link  || model("link", LinkSchema);


export default schema;