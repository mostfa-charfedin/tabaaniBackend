import { Router } from 'express';
import authorize from "../middlewares/auth.middleware.js";
import {createCourse, getAllCourses, getCourseById, getCourseByOwnerId,} from "../controllers/course.controller.js";
import upload from "../middlewares/upload.js";



const courseRouter = Router();

//courseRouter.post('/createCourse', authorize, createCourse);
courseRouter.post("/", authorize, upload.single("image"), createCourse);

courseRouter.get('/user/:id', authorize, getCourseByOwnerId);

courseRouter.get('/getAllCourses', getAllCourses);

courseRouter.get('/:id', authorize, getCourseById);

courseRouter.put('/:id', (req, res) => res.send({ title: 'UPDATE course' }));

courseRouter.delete('/:id', (req, res) => res.send({ title: 'DELETE course' }));




export default courseRouter;