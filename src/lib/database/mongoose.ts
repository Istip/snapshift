import mongoose, { Mongoose } from "mongoose";

interface MongooseConnection {
  conn: Mongoose | null;
  promise: Promise<Mongoose> | null;
}

const MONGODB_URL = process.env.MONGODB_URL;
const MONGODB_NAME = process.env.MONGODB_NAME;

let cached: MongooseConnection = (global as any).mongoose;

if (!cached) {
  cached = (global as any).mongoose = { conn: null, promise: null };
}

export const MongooseConnection = async () => {
  if (cached.conn) {
    return cached.conn;
  }

  if (!MONGODB_URL) {
    throw new Error("MONGODB_URL is not defined");
  }

  cached.promise =
    cached.promise ||
    mongoose.connect(MONGODB_URL, {
      dbName: MONGODB_NAME,
      bufferCommands: false,
    });

  cached.conn = await cached.promise;

  return cached.conn;
};
