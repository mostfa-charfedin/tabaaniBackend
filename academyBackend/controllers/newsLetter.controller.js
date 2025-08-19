import Newsletter from "../models/newsletter.model.js";




export const addNewsletter = async (req, res, next) => {
    try {
        const existingEmail = await Newsletter.findOne({ email: req.body.email });
        if (existingEmail) {
            return res.status(409).json({ message: 'Email already exists' });
        }

        await Newsletter.create(req.body);

        return res.status(201).json({ success: true });
    } catch (e) {
        next(e); 
    }
};


export const getAllNewsletters = async (req, res, next) => {
    try {
        const newsletters = await Newsletter.find();

        res.status(200).json({ success: true, data: newsletters });
    } catch (error) {
        next(error);
    }
}

export const getNewsletterByEmail = async (req, res, next) => {
    try {

        if(!req.email) {
            const error = new Error('no email found');
            error.status = 401;
            throw error;
        }

        const newsletters = await Newsletter.finddByEmail(req.email);

        res.status(200).json({ success: true, data: newsletters });
    } catch (e) {
        next(e);
    }
}


export const getNewsletterById = async (req, res, next) => {
    try {
        const newsletterId = req.params.id;

        if (!newsletterId) {
            return res.status(400).json({ success: false, message: 'Invalid newsletter ID format' });
        }

        const newsletter = await Newsletter.findById(newsletterId);

        if (!newsletter) {
            return res.status(404).json({ success: false, message: 'Newsletter not found' });
        }

        res.status(200).json({ success: true, data: newsletter });
    } catch (e) {
        next(e);
    }
}