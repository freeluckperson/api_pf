import express from 'express'
import morgan from 'morgan'
import authRoutes from './routes/auth.routes.js'
const app = express() 

app.use(morgan('dev'))
app.use(express.json())

app.get('/ping', (_, res)=>res.send('pong'))
app.use('/api', authRoutes)

export default app