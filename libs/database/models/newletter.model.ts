import { model, models, Schema } from "mongoose";



export interface INewsLetter extends Document {
    email: string
}


const NewsLetterSchema = new Schema<INewsLetter>({

    email: {
        type: String,
        reuired: [true, "Email address is required."]
    }

}, {
    timestamps: true
})


const NewsLetter = models.NewsLetter || model("NewsLetter", NewsLetterSchema) 
