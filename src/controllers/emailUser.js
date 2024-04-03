import * as services from '../services'
import { badRequest, internalServerError } from '../middleware/handle_errors'
import { emailOfUser, bids } from '../helper/joi_schema'
import joi from 'joi'

// GET
export const getEmailUser = async(req, res) => {
    try {
        const response = await services.getEmailUser(req.query)
        return res.status(200).json(response)
    } catch (error) {
        return internalServerError(res)
    }
}

// CREATE
export const createEmailUser = async(req, res) => {
    try {
        const {error} = joi.object({emailOfUser}).validate({...req.body})
        if(error){
            return badRequest(error.details[0].message, res)
        } 
        const response = await services.createNewEmailUser(req.body)
        return res.status(200).json(response)
    } catch (error) {
        return internalServerError(res)
    }
}

// DELETE
export const deleteEmailUser = async(req, res) => {
    try {
        const {error} = joi.object({bids}).validate(req.query)
        if(error){
            return badRequest(error.details[0].message, res)
        } 
        const response = await services.deleteEmailProduct(req.query.bids)
        return res.status(200).json(response)   
    } catch (error) {
        return internalServerError(res)
    }
}  