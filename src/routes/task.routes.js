import { Router } from 'express'
const router = Router()
import { authRequired } from '../middlewares/validateToken.js'
import { getTasks, getTask, updateTask, createTask, deleteTask, errorHandler } from '../controllers/tasks.controller.js'
import { validateSchema } from '../middlewares/validator.middleware.js'
import { createTaskSchema } from '../schemas/task.schema.js'

router.get('/task', authRequired, errorHandler(getTasks))
router.get('/task/:id', authRequired, errorHandler(getTask))
router.put('/task/:id', authRequired, errorHandler(updateTask))
router.post('/task', authRequired, validateSchema(createTaskSchema), errorHandler(createTask))
router.delete('/task/:id', authRequired, errorHandler(deleteTask))


export default router