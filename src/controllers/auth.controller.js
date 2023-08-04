import User from '../models/user.model.js'

export const register = async (req, res) => {
  try {
    const { userName, password, email } = req.body
    const newUser = new User({
      userName,
      password,
      email,
    })
    const userSaved = await newUser.save()
    res.status(200).json(userSaved)
  } catch (error) {
    res.status(500).json({message: error.message})
  }
}

export const login = async (req, res) => {
  
}
