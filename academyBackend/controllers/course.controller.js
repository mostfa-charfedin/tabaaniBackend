import Course from '../models/course.model.js'



export const createCourse = async (req, res, next) => {
    try {
        const imagePath = req.file ? `/uploads/${req.file.filename}` : null;

        const course = await Course.create({
            ...req.body,
            image: imagePath,
            owner: req.user._id,




        });

        res.status(201).json({ success: true, data: { course } });
    } catch (e) {
        next(e);
    }
};


export const getCourseByOwnerId = async (req, res, next) => {
    try {

        if(req.owner.id !== req.params.id) {
            const error = new Error('You are not the owner of this Course');
            error.status = 401;
            throw error;
        }

        const courses = await Course.find({ user: req.params.id });

        res.status(200).json({ success: true, data: courses });
    } catch (e) {
        next(e);
    }
}



export const getCourseById = async (req, res, next) => {
    try {
        const courseId = req.params.id;

        if (!courseId) {
            return res.status(400).json({ success: false, message: 'Invalid course ID format' });
        }

        const course = await Course.findById(courseId);

        if (!course) {
            return res.status(404).json({ success: false, message: 'Course not found' });
        }

        res.status(200).json({ success: true, data: course });
    } catch (e) {
        next(e);
    }
};


export const getAllCourses = async (req, res, next) => {
    try {
        const courses = await Course.find();
        res.status(200).json({ success: true, data: courses });
    } catch (e) {
        next(e);
    }
};


