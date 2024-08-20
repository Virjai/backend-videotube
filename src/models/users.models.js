import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            lowercase: true,
            unique: true,
            trim: true,
            index: true
        },
        email: {
            type: String,
            required: true,
            lowercase: true,
            unique: true,
            trim: true
        },
        fullName: {
            type: String,
            required: true,
            trim: true, 
            index: true
        },
        watchHistory: [
            {
                type: Schema.Types.ObjectId,
                ref: "Video"
            }
        ],
        avatar: {
            type: String,
            required: true,
        },
        coverImage: {
            type: String
        },
        password: {
            type: String,
            required: true
        },
        refreshToken: {
            type: String
        }
    },
    { timestamps: true }
)


export const User = mongoose.model("User", userSchema)