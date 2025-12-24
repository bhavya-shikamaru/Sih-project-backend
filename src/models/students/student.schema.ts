import { Schema, model } from "mongoose";

const StudentSchema = new Schema(
    {
        enrollmentId: { type: String, required: true, unique: true },
        name: { type: String, required: true },
        department: { type: String, required: true },
        semester: { type: Number, required: true },
        batch: { type: String, required: true },
        mentorId: { type: String },
        status: {
            type: String,
            enum: ["active", "at-risk", "dropped"],
            default: "active"
        }
    },
    { timestamps: true }
);

export const StudentModel = model("Student", StudentSchema);
