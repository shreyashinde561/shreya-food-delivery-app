import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('DB connected');
    } catch (error) {
        console.error('DB connection error:', error.message);
        process.exit(1); // Stop the server if DB connection fails
    }
};