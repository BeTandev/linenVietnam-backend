import { Op } from "sequelize";
import db from "../models";
import {v4 as generetor} from 'uuid'
const cloudinary = require('cloudinary').v2;

// CREATE NEW PRODUCT
export const createNewProduct = (body, fileData) => new Promise(async (resolve, reject) => {
    try {
        const response = await db.Product.findOrCreate({
            where: {nameProduct: body?.nameProduct},
            defaults: {
                ...body,
                id: generetor(),
                avatarProduct: fileData?.path
            }
        })
        resolve({
            err: response[1] ? 0 : 1,
            mes: response[1] ? "Created" : "Cannot created new product",
        })
        if(fileData && response[1]) cloudinary.uploader.destroy(fileData.filename)
    } catch (error) {
        reject(error)
        if(fileData && response[1]) cloudinary.uploader.destroy(fileData.filename)
    }
})