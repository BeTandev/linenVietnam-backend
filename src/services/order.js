import { INTEGER, Op } from "sequelize";
import db from "../models";
import {v4 as generated} from 'uuid'

// READ
export const getOrders = ({page, limit, order, name, ...query}) => new Promise(async (resolve, reject) => {
    try{
        const queries = {raw: true, nest: true}
        const offset = (!page || +page <= 1) ? 0 : (+page - 1)
        const fLimit = +limit || +process.env.LIMIT_PRODUCT
        queries.offset = offset * fLimit
        queries.limit = fLimit
        if(order) queries.order = [order]
        if(name) query.title = {[Op.substring]: name}
        const response = await db.Order.findAndCountAll({
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
            mes: response ? "Got" : "Cannot find order",
            bookData: response
        })
    } catch(err){
        reject(err)
    }
})

// CREATE
export const createNewOrder = (body) => new Promise(async (resolve, reject) => {
    try{
        const response = await db.Order.findOrCreate({
            where: {nameProductOrder: body?.nameProductOrder},
            defaults: {
                ...body,
                id: generated()
            }
        })
        resolve({
            err: response[1] ? 0 : 1,
            mes: response[1] ? "Created" : "Cannot created new order",
        })
    } catch(err){
        reject(err)
    }
})

// UPDATE
export const updateOrder = ({bid,...body}) => new Promise(async (resolve, reject) => {
    try{
        const response = await db.Order.update(body,{
            where: {id: bid}
        })
        resolve({
            err: response[0] > 0 ? 0 : 1,
            mes: response[0] > 0 ? `${response[0]} order updated` : "Cannot update order/Order id not found",
        })
    } catch(err){
        reject(err)
    }
})

// DELETE   
export const deleteOrder = (bids) => new Promise(async (resolve, reject) => {
    try{
        const response = await db.Order.destroy({
            where: {id: bids}
        })
        resolve({
            err: response > 0 ? 0 : 1,
            mes: response > 0 ? `${response} order deleted` : "Cannot delete order/Order id not found",
        })
    } catch(err){
        reject(err)
    }
})