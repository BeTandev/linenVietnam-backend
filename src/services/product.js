import { INTEGER, Op } from "sequelize";
import db from "../models";
const cloudinary = require('cloudinary').v2;
import {v4 as generated} from 'uuid'

// READ
export const getProducts = ({page, limit, order, name, category, ...query}) => new Promise(async (resolve, reject) => {
    try{
        const queries = {raw: true, nest: true}
        const offset = (!page || +page <= 1) ? 0 : (+page - 1)
        const fLimit = +limit || +process.env.LIMIT_PRODUCT
        queries.offset = offset * fLimit
        queries.limit = fLimit
        if(order) queries.order = [order]
        if(name) query.title = {[Op.substring]: name}
        if(category) query.categoryProduct = {[Op.substring]: category.split("%20").join(" ")}
        const response = await db.Product.findAndCountAll({
            where: query,
            ...queries
            // attributes: {
            //     exclude: ['page']
            // },
            // include:[
            //     {model: db.Category, attributes: {exclude:  ['createdAt', 'updatedAt']}, as: 'categoryData'}
            // ]
        })
        resolve({
            err: response ? 0 : 1,
            mes: response ? "Got" : "Cannot find product",
            productData: response
        })
    } catch(err){
        reject(err)
    }
})

// CREATE
export const createNewProduct = (body, fileData) => new Promise(async (resolve, reject) => {
    try{
        const response = await db.Product.findOrCreate({
            where: {nameProduct: body?.nameProduct},
            defaults: {
                ...body,
                id: generated(),
                image: fileData?.path,
                filename: fileData?.filename
            }
        })
        resolve({
            err: response[1] ? 0 : 1,
            mes: response[1] ? "Created" : "Cannot created new product",
        })
        if(fileData && !response[1]) cloudinary.uploader.destroy(fileData.filename)
    } catch(err){
        reject(err)
        if(fileData) cloudinary.uploader.destroy(fileData.filename)
    }
})

// UPDATE
export const updateProduct = ({bid,...body}, fileData) => new Promise(async (resolve, reject) => {
    try{
        if(fileData) body.image = fileData?.path
        const response = await db.Product.update(body,{
            where: {id: bid}
        })
        resolve({
            err: response[0] > 0 ? 0 : 1,
            mes: response[0] > 0 ? `${response[0]} book updated` : "Cannot update book/Book id not found",
        })
        if(fileData && response[0] === 0) cloudinary.uploader.destroy(fileData.filename)
    } catch(err){
        reject(err)
        if(fileData) cloudinary.uploader.destroy(fileData.filename)
    }
})

// DELETE   
export const deleteProduct = (bids, filename) => new Promise(async (resolve, reject) => {
    try{
        const response = await db.Product.destroy({
            where: {id: bids}
        })
        resolve({
            err: response > 0 ? 0 : 1,
            mes: response > 0 ? `${response} book deleted` : "Cannot delete book/Book id not found",
        })
        cloudinary.api.delete_resources(filename)
    } catch(err){
        reject(err)
    }
})