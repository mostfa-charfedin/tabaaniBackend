import User from '../models/user.model.js'

export const getUsers = async (req, res, next) => {
    try {
        const users = await User.find();

        res.status(200).json({ success: true, data: users });
    } catch (error) {
        next(error);
    }
}

export const getUser = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id);

        if (!user) {
            const error = new Error('User not found');
            error.statusCode = 404;
            throw error;
        }

        res.status(200).json({success: true, data: user});
    } catch (error) {
        next(error);
    }
}

export const updateUser = async (req, res) => {

        const  id  = req.params.id;
        const updates = req.body;
        try {
        
            if ( updates.password) {
                return res.status(400).json({ message: 'password cannot be updated via this endpoint.' });
            }

            const updatedUser = await User.findByIdAndUpdate(
                id,
                { $set: updates },
                { new: true, runValidators: true }
            );

            if (!updatedUser) {
                return res.status(404).json({ message: 'User not found' });
            }

            res.status(200).json(updatedUser);
       } catch (error) {
    console.error("Error updating user:", error); 
    res.status(500).json({ message: 'Server error', error: error.message });
}
}



