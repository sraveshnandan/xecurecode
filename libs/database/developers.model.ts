import { model, models, Schema } from "mongoose";



export interface IDev extends Document {
    full_name: string;
    email: string;
    mobile: string,
    date_of_birth: Date,
    role: string,
    qualification: string,
    address: string,
    resume: {
        public_id: string,
        url: string
    },
    status: string
}


const DevSchema = new Schema<IDev>({
    full_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        reuired: [true, "Email address is required."]
    },
    mobile: {
        type: String,
        required: true
    },
    date_of_birth: {
        type: Date,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    qualification: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    resume: {
        public_id: String,
        url: String,
        required: true
    },
    status: {
        type: String,
        enum: ["joined", "processing", "submitted"],
        required: true
    }


}, {
    timestamps: true
})


const Dev = models.Dev || model("Dev", DevSchema) 
