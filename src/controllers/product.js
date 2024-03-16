import * as services from '../services'
import { badRequest, internalServerError } from '../middleware/handle_errors'
import joi from 'joi'
import { nameProduct, detailProduct, priceProduct, categoryProduct, reviewProduct, tagProduct, amountProduct, weightProduct, widthProduct, avatarProduct, detailImgProduct } from '../helper/joi_schema'
const cloudinary = require('cloudinary').v2;


// CREATE
export const createNewProduct = async(req, res) => {
    try {
        const fileData = req.file
        const {error} = joi.object({nameProduct, detailProduct, priceProduct, categoryProduct, tagProduct, amountProduct, weightProduct, widthProduct, avatarProduct}).validate({...req.body, avatarProduct: fileData?.path})
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
