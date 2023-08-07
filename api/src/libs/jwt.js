import { TOKEN_SECRECT } from '../config.js'
import jwt from 'jsonwebtoken'

export function createdAccessToken(payload) {
  return new Promise((resolve, reject) => {
    jwt.sign(
        payload, 
        TOKEN_SECRECT, 
        { expiresIn: '1d' }, 
        (err, token) => {
          err ? reject(err) : resolve(token)
    })
  })
}
