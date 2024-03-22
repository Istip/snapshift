import { Schema, model, models, Document } from "mongoose";

export interface IImage extends Document {
  title: string;
  tranformationType: string;
  publicId: string;
  secureUrl: string;
  width?: number;
  height?: number;
  config?: object;
  transformationUrl?: string;
  aspectRation?: string;
  color?: string;
  prompt?: string;
  authhor: {
    _id: string;
    firstName: string;
    lastName: string;
  };
  createdAt?: Date;
  updatedAt?: Date;
}

const imageSchema = new Schema({
  title: { type: String, required: true },
  tranformationType: { type: String, required: true },
  publicId: { type: String, required: true },
  secureUrl: { type: URL, required: true },
  width: { type: Number },
  height: { type: Number },
  config: { type: Object },
  transformationUrl: { type: URL },
  aspectRation: { type: String },
  color: { type: String },
  prompt: { type: String },
  authhor: { type: Schema.Types.ObjectId, ref: "User" },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Image = models?.Image || model("Image", imageSchema);

export default Image;
