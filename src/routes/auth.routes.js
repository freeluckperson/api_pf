import {Router} from 'express'
import { register, login, logout, profile } from '../controllers/auth.controller.js'
import { authRequired } from '../middlewares/validateToken.js'
import { validateSchema } from '../middlewares/validator.middleware.js'
import { loginSchema, registerSchema } from '../schemas/auth.schema.js'
import { errorLoginHandler } from '../controllers/auth.controller.js'


const router = Router()

router.post('/register', validateSchema(registerSchema), errorLoginHandler(register))

router.post('/login', validateSchema(loginSchema), errorLoginHandler(login))

router.post('/logout', errorLoginHandler(logout))

router.get('/profile', authRequired, errorLoginHandler(profile))

export default router