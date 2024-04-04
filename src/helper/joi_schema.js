import joi from "joi";

export const email = joi.string().email({minDomainSegments: 2, tlds: {allow: ['com']}}).required()
export const password = joi.string().min(6).max(30).required()
// export const title = joi.string().required()
// export const page = joi.number().required()
// export const year = joi.number().required()
// export const category_code = joi.string().uppercase().alphanum().required()
export const image = joi.string().required()
// export const language = joi.string().required()
export const bid = joi.string().required()
export const bids = joi.array().required()
export const filename = joi.array().required()
export const nameProduct = joi.string().required()
export const detailProduct = joi.string().required()
export const priceProduct = joi.number().required()
export const categoryProduct = joi.string().required()
export const tagProduct = joi.string()
export const amountProduct = joi.number().required()
export const weightProduct = joi.number().required()
export const widthProduct = joi.number().required()
export const nameProductOrder = joi.string().required()
export const nameUserOrder = joi.string().required()
export const addressOrder = joi.string().required()
export const phoneNumberOrder = joi.number().required()
export const totalOrder = joi.number().required()
export const amountOrder = joi.string().required()
export const companyNameOrder = joi.string()
export const emailOrder = joi.string().email({minDomainSegments: 2, tlds: {allow: ['com']}}).required()
export const noteOrder = joi.string()
export const shippingMethodOrder = joi.string().required()
export const emailOfUser = joi.string().email({minDomainSegments: 2, tlds: {allow: ['com']}}).required()
export const firstImage = joi.string().required()
export const titleBlog = joi.string().required()
export const firstContent = joi.string().required()
export const secondContent = joi.string()
export const thirdContent = joi.string()
export const secondImage = joi.string()
export const thirdImage = joi.string()