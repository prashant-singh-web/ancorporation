// db.js
import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    // Replace the connection string with your MongoDB Atlas connection string
    const dbURI = process.env.MONGODB_STRING || "";

    await mongoose.connect(dbURI);
    console.log(dbURI);

    console.log('Connected to MongoDB');
  } catch (error:any) {
    console.error('Error connecting to MongoDB:', error.message);
  }
};

export default connectDB;
