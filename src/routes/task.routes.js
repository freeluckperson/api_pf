import { Router } from 'express'
const router = Router()
import { authRequired } from '../middlewares/validateToken.js'

router.get('/task', authRequired, (req, res)=>{
    res.send('task function')
})

export default router