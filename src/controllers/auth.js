import * as services from "../services";
import { internalServerError, badRequest } from "../middleware/handle_errors";
import {email, password} from '../helper/joi_schema'
import Joi from "joi";

export const register = async (req, res) => {
    try {
        const {error} = Joi.object({email, password}).validate(req.body)
        if(error) return badRequest(error.details[0]?.message, res)

        const response = await services.register(req.body)
        return res.status(200).json(response)

    } catch (error) {
        return internalServerError(res)
    }
}

export const login = async (req, res) => {
    try {
        const {email, password} = req.body

        if(!email || !password) return res.status(400).json({
            err: 1,
            mes: 'Missing payload'
        })

        const response = await services.login(req.body)
        return res.status(200).json(response)

    } catch (error) {
        return internalServerError(res)
    }
}