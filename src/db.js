import { connect } from 'mongoose'

const connetDB = async () => {
  try {
    // await connect(`mongodb+srv://yalod64315:UPGUPG8SEVSreFya@clouster0.iy54f0i.mongodb.net/`)
    await connect('mongodb://0.0.0.0/mongoDesktop')
    console.log('>>> mongodb conected')
  } catch (error) {
    console.log(error)
  }
}

export default connetDB



