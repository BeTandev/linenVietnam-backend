import * as services from "../services";
import { internalServerError } from "../middleware/handle_errors";
// import {email, password} from '../helper/joi_schema'
// import Joi from "joi";

export const getCurrent = async (req, res) => {
    try {
        const {id} = req.user   
        const response = await services.getOne(id)
        return res.status(200).json(response)

    } catch (error) {
        return internalServerError(res)
    }
}