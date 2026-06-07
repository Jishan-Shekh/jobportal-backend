import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const uri = process.env.MONGO_URL;
        if (!uri) throw new Error("Mongo URL missing");

        await mongoose.connect(uri);
        console.log("mongodb connected successfully");
    } catch (error) {
        console.log("DB Error:", error.message);
        process.exit(1);
    }
};

export default connectDB;