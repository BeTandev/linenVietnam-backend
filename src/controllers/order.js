import * as services from '../services'
import { badRequest, internalServerError } from '../middleware/handle_errors'
import { nameproductorder, nameuserOrder, addressorder, phonenumberOrder, totalOrder, bids, bid } from '../helper/joi_schema'
import joi from 'joi'

// GET
export const getOrders = async(req, res) => {
    try {
        const response = await services.getOrders(req.query)
        return res.status(200).json(response)
    } catch (error) {
        return internalServerError(res)
    }
}

// CREATE
export const createNewOrder = async(req, res) => {
    try {
        const {error} = joi.object({nameproductorder, nameuserOrder, addressorder, phonenumberOrder, totalOrder}).validate({...req.body})
        if(error){
            return badRequest(error.details[0].message, res)
        } 
        const response = await services.createNewOrder(req.body)
        return res.status(200).json(response)
    } catch (error) {
        return internalServerError(res)
    }
}

// UPDATE
export const updateOrder = async(req, res) => {
    try {
        const {error} = joi.object({bid}).validate({bid: req.body.bid})
        if(error){
            return badRequest(error.details[0].message, res)
        } 
        const response = await services.updateOrder(req.body)
        return res.status(200).json(response)
    } catch (error) {
        return internalServerError(res)
    }
}  

// DELETE
export const deleteOrder = async(req, res) => {
    try {
        const {error} = joi.object({bids}).validate(req.query)
        if(error){
            return badRequest(error.details[0].message, res)
        } 
        const response = await services.deleteOrder(req.query.bids)
        return res.status(200).json(response)   
    } catch (error) {
        return internalServerError(res)
    }
}  