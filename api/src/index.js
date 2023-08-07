import app from './app.js'
import connetDB from './db.js'

const PORT = 3001;

connetDB()
app.listen(PORT)
console.log(`>>> Rise in port ${PORT}`)


