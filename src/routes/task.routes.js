import { Router } from 'express'
const router = Router()
import { authRequired } from '../middlewares/validateToken.js'
import { getTasks, getTask, updateTask, createTask, deleteTask } from '../controllers/tasks.controller.js'

router.get('/task', authRequired, getTasks)
router.get('/task/:id', authRequired, getTask)
router.put('/task/:id', authRequired, updateTask)
router.post('/task', authRequired, createTask)
router.delete('/task/:id', authRequired, deleteTask)


export default router