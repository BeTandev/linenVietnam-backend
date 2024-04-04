import * as services from '../services'
import { badRequest, internalServerError } from '../middleware/handle_errors'
import { firstImage, titleBlog, firstContent, secondContent, thirdContent, secondImage, thirdImage, bid, bids, filename } from '../helper/joi_schema'
import joi from 'joi'
const cloudinary = require('cloudinary').v2;

// GET
export const getBlogs = async(req, res) => {
    try {
        const response = await services.getBlogs(req.query)
        return res.status(200).json(response)
    } catch (error) {
        return internalServerError(res)
    }
}

// CREATE
export const createNewBlog = async(req, res) => {
    try {
        console.log(req)
        const fileData = req.file
        const {error} = joi.object({firstImage, titleBlog, firstContent, secondContent, thirdContent}).validate({...req.body, firstImage: fileData?.path})
        if(error){
            if(fileData) cloudinary.uploader.destroy(fileData.filename)
            return badRequest(error.details[0].message, res)
        } 
        const response = await services.createNewBlog(req.body, fileData)
        return res.status(200).json(response)
    } catch (error) {
        return internalServerError(res)
    }
}

// UPDATE
// export const updateProduct = async(req, res) => {
//     try {
//         const fileData = req.file
//         const {error} = joi.object({bid}).validate({bid: req.body.bid})
//         if(error){
//             if(fileData) cloudinary.uploader.destroy(fileData.filename)
//             return badRequest(error.details[0].message, res)
//         } 
//         const response = await services.updateProduct(req.body, fileData)
//         return res.status(200).json(response)
//     } catch (error) {
//         return internalServerError(res)
//     }
// }  

// // DELETE
// export const deleteProduct = async(req, res) => {
//     try {
//         const {error} = joi.object({bids, filename}).validate(req.query)
//         if(error){
//             return badRequest(error.details[0].message, res)
//         } 
//         const response = await services.deleteProduct(req.query.bids, req.query.filename)
//         return res.status(200).json(response)   
//     } catch (error) {
//         return internalServerError(res)
//     }
// }  