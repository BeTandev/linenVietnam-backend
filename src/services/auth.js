import db from '../models'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const hashPassword = password => bcrypt.hashSync(password, bcrypt.genSaltSync(12))

export const register = ({email, password}) => new Promise( async (resolve, reject) => {
    try {
        const response = await db.User.findOrCreate({
            where: {email: email},
            defaults: {
                email: email,
                password: hashPassword(password)
            }
        })
      
        const token = response[1] ? jwt.sign({id: response[0].id, email: response[0].email, role_code: response[0].role_code, name: response[0].name}, process.env.JWT_SECRET, { expiresIn: '5d' }) : null

        resolve({
            err: response[1] ? 0 : 1,
            mes: response[1] ? 'Register is successfully' : 'Email is used',
            token
        })

        return resolve({
            err: 0,
            mes: 'register service'
        })

    } catch (error) {
        reject(error)
    }
})


export const login = ({email, password}) => new Promise( async (resolve, reject) => {
    try {
        const response = await db.User.findOne({
            where: {email: email},
            raw: true
        })

        const isChecked = response && bcrypt.compareSync(password, response.password)
        const token = isChecked ? jwt.sign({id: response.id, email: response.email, role_code: response.role_code, name: response.name}, process.env.JWT_SECRET, { expiresIn: '1d' }) : null
      
        // const token = response[1] ? jwt.sign({id: response[0].id, email: response[0].email, role_code: response[0].role_code, name: response[0].name}, process.env.JWT_SECRET, { expiresIn: '5d' }) : null

        resolve({
            err: token ? 0 : 1,
            mes: token ? 'Login is successfully' : response ? 'Password is wrong' : 'Email has been register',
            'access_token': token ? `Bearer ${token}` : token
        })

        return resolve({
            err: 0,
            mes: 'register service'
        })

    } catch (error) {
        reject(error)
    }
})