import { Op } from "sequelize";
import db from "../models";

// READ
export const getEmailUser = ({page, limit, order, name, category, ...query}) => new Promise(async (resolve, reject) => {
    try{
        const queries = {raw: true, nest: true}
        const offset = (!page || +page <= 1) ? 0 : (+page - 1)
        const fLimit = +limit || +process.env.LIMIT_PRODUCT
        queries.offset = offset * fLimit
        queries.limit = fLimit
        if(order) queries.order = [order]
        if(name) query.title = {[Op.substring]: name}
        const response = await db.EmailUser.findAndCountAll({
            where: query,
            ...queries
        })
        resolve({
            err: response ? 0 : 1,
            mes: response ? "Got" : "Cannot find email",
            emailUsertData: response
        })
    } catch(err){
        reject(err)
    }
})
// CREATE
export const createNewEmailUser = (body) => new Promise(async (resolve, reject) => {
    try{
        const response = await db.EmailUser.findOrCreate({
            where: {emailOfUser: body?.emailOfUser},
            defaults: {
                ...body
            }
        })
        resolve({
            err: response[1] ? 0 : 1,
            mes: response[1] ? "Created" : "Cannot created new email",
        })
    } catch(err){
        reject(err)
    }
})

// DELETE   
export const deleteEmailProduct = (bids) => new Promise(async (resolve, reject) => {
    try{
        const response = await db.EmailUser.destroy({
            where: {id: bids}
        })
        resolve({
            err: response > 0 ? 0 : 1,
            mes: response > 0 ? `${response} email deleted` : "Cannot delete email/Email id not found",
        })
    } catch(err){
        reject(err)
    }
})