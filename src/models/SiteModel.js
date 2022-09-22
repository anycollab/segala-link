import { Schema, model, models } from 'mongoose';

const SiteSchema = new Schema({
  username: {
    type: string,
    required: true,
  },
  picture: {
    type: string,
    required: true,
  },
  title: {
    type: string,
    required: true,
  },
  subtitle: {
    type: string,
    required: true,
  },
  link_id: {
    type: array,
    required: true,
    default: [],
  }
});

const schema = models.Site || model("site", SiteSchema);

export default schema;