import { notAuth } from "./handle_errors"


export const isAdmin = (req, res, next) => {
    const {role_code} = req.user
    if(role_code !== 'R1') return notAuth('Required role Admin', res)
    next()
}