import jwt from 'jsonwebtoken'
import { TOKEN_SECRECT } from '../config.js'

export const authRequired = (req, res, next) => {
  const { token } = req.cookies;
  if (!token) return res.status(401).json({ message: 'No token, auth denied' });

  jwt.verify(token, TOKEN_SECRECT, (err, user) => {
    if (err) return res.status(403).json({ message: 'Invaled tokem' });
    req.user = user
    next()
  })

}
