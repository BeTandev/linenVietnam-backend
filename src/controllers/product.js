import * as services from '../services'
import { badRequest, internalServerError } from '../middleware/handle_errors'
import { nameProduct, detailProduct, priceProduct, categoryProduct, image, tagProduct, amountProduct, weightProduct, widthProduct, bid, bids, filename } from '../helper/joi_schema'
import joi from 'joi'
const cloudinary = require('cloudinary').v2;

// GET
export const getProducts = async(req, res) => {
    try {
        const response = await services.getProducts(req.query)
        return res.status(200).json(response)
    } catch (error) {
        return internalServerError(res)
    }
}

// CREATE
export const createNewProduct = async(req, res) => {
    try {
        const fileData = req.file
        const {error} = joi.object({nameProduct, detailProduct, priceProduct, categoryProduct, image, tagProduct, amountProduct, weightProduct, widthProduct}).validate({...req.body, image: fileData?.path})
        if(error){
            if(fileData) cloudinary.uploader.destroy(fileData.filename)
            return badRequest(error.details[0].message, res)
        } 
        const response = await services.createNewProduct(req.body, fileData)
        return res.status(200).json(response)
    } catch (error) {
        return internalServerError(res)
    }
}

// UPDATE
export const updateProduct = async(req, res) => {
    try {
        const fileData = req.file
        const {error} = joi.object({bid}).validate({bid: req.body.bid})
        if(error){
            if(fileData) cloudinary.uploader.destroy(fileData.filename)
            return badRequest(error.details[0].message, res)
        } 
        const response = await services.updateProduct(req.body, fileData)
        return res.status(200).json(response)
    } catch (error) {
        return internalServerError(res)
    }
}  

// DELETE
export const deleteProduct = async(req, res) => {
    try {
        const {error} = joi.object({bids, filename}).validate(req.query)
        if(error){
            return badRequest(error.details[0].message, res)
        } 
        const response = await services.deleteProduct(req.query.bids, req.query.filename)
        return res.status(200).json(response)   
    } catch (error) {
        return internalServerError(res)
    }
}  