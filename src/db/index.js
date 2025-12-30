import mongoose from 'mongoose';
import { DB_NAME } from '../constants.js';

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
    //mongoose.connect returns an object with connection property
    console.log(`MongoDB connected !!! ${connectionInstance.connection.host}`);
    //production,testing dbs are different , so to avoid data mix-up we print it.
    //assignment- see what properties in the connectionInstance object
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};

export default connectDB;