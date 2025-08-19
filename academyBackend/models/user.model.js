import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    lastName: {
        type: String,
        required: [true, 'Last Name is required'],
        trim: true,
        minLength: 2,
        maxLength: 50,
    },
    firstName: {
        type: String,
        required: [true, 'First Name is required'],
        trim: true,
        minLength: 2,
        maxLength: 50,
    },
    email: {
        type: String,
        required: [true, 'User Email is required'],
        unique: true,
        trim: true,
        lowercase: true,
        match: [/\S+@\S+\.\S+/, 'Please fill a valid email address'],
    },
    password: {
        type: String,
        required: [true, 'User Password is required'],
        minLength: 6,
    },
    role:  {
        type: String,
        enum: ['Admin', 'Tutor', 'Student'],
        default: 'Student',
    },

 

}, { timestamps: true });

const User = mongoose.model('User', userSchema);

export default User;