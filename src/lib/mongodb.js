// lib/mongodb.js
import mongoose from 'mongoose';

let isConnected = false; // Track the connection

export async function connectDB() {
  if (isConnected) return;

  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      dbName: 'mydatabase', // choose any db name you like
    });
    isConnected = true;
    console.log('✅ MongoDB connected:', conn.connection.host);
  } catch (error) {
    console.error('❌ MongoDB connection error:', error);
    throw error;
  }
}
