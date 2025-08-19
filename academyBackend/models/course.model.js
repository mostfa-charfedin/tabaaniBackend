import mongoose from 'mongoose';

const courseSchema = new mongoose.Schema({
    courseTitle: {
        type: String,
        required: [true, 'Course name is required'],
        trim: true,
        minLength: 2,
        maxLength: 100,
    },
        subtitle: {
            type: String,
            required: [true, 'sub title name is required'],
            trim: true,
            minLength: 2,
            maxLength: 100,
        },

        description: {
            type: String,
            required: [true, 'Description name is required'],
            trim: true,
            minLength: 2,
            maxLength: 500,
        },

        image: {
            type: String,
            required: [true, 'image is required'],
        },

    level: {
        type: String,
        enum: ['Beginner', 'Average', 'Advanced'],
    },
        features: {
            type: [String],  // array of strings
            enum: ['Self-paced learning', 'Video tutorials', 'Unlimited access'],
            required: true,
        },




        owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        index: true,
    },
    lessons:{
        type: Number,
        default: 0
    },
        hours:{
            type: Number,
            default: 0
        },
        price:{
            type: Number,
            default: 0
        },
        modules:{
            type: Number,
            default: 0
        },
    students:{
        type: Number,
        default: 0
    },
        rating:{
        type: Number,
        default: 0
},
        category: {
            type: String,
            enum: ["Web Development", "Data Science", "Mobile Development", "Design", "Business"],
        },


},
    { timestamps: true });



const Course = mongoose.model('Course', courseSchema);

export default Course;