import * as services from '../services'

export const checkRole = (req, res) => {
    const result = services.checkRole()
    return res.json({ message: result });
};
