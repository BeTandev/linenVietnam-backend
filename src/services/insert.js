import db from '../models'
import jwt from 'jsonwebtoken'
import data from '../../jsonformatter.json'
import { generateCode } from '../helper/fn'

export const insertData = () => new Promise( async (resolve, reject) => {
    try {
        const categories = Object.keys(data)
        categories.forEach(async (item) => {
            await db.Category.create({
                code: generateCode(item),
                value: item
            })
        })
        const dataArr = Object.entries(data)
        dataArr.forEach((item) => {
            item[1]?.map(async(book) => {
                await db.Book.create({
                    id: book.id,
                    title: book.title,
                    page: book.page,
                    year: book.year,
                    image: book.imageLink,
                    language: book.language,
                    category_book: generateCode(item[0])
                })
            })
        })
        resolve('OK')

    } catch (error) {
        reject(error)
    }
})
