import mongoose from 'mongoose';

const newsletterSchema = new mongoose.Schema({

    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        trim: true,
        lowercase: true,
        match: [/\S+@\S+\.\S+/, 'Please fill a valid email address'],
    },

    status:{
        type: Boolean,
        default: true
    }
   

},
    { timestamps: true });


const Newsletter = mongoose.model('NewsLetter', newsletterSchema);

export default Newsletter;