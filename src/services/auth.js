import db from '../models'

export const register = () => new Promise((resolve, reject) => {
    try {
        return resolve({
            err: 0,
            mes: 'register service'
        })
    } catch (error) {
        reject(error)
    }
})