// db.ts

import mongoose, { Document, Model, Schema } from 'mongoose';

// Define the contact schema
interface IContact extends Document {
  name: string;
  email: string;
  number: string;
  message: string;
}

const contactSchema: Schema<IContact> = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  number: { type: String, required: true },
  message: { type: String, required: true },
});

// Create the Contact model
const Contact: Model<IContact> = mongoose.models.Contact || mongoose.model<IContact>('Contact', contactSchema);

// Export the connection and model
export { Contact };
