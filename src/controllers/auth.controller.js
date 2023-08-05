import User from '../models/user.model.js'
import bcrypt from 'bcryptjs'
import { createdAccessToken } from '../libs/jwt.js'

export const register = async (req, res) => {
  const { userName, password, email } = req.body

  try {
    const passwordHash = await bcrypt.hash(password, 10)
    const newUser = new User({
      userName,
      email,
      password: passwordHash,
    })

    const userSaved = await newUser.save();
    const token = await createdAccessToken({id: userSaved._id})

    res.cookie('token', token)
    res.json(userSaved)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const login = async (req, res, next) => {
  const { password, email } = req.body

  try {
    const userFound = await User.findOne({email})
    if (!userFound) return res.status(400).json({message: 'Incorrect mail'})
    const isMatch = await bcrypt.compare(password, userFound.password)
    if (!isMatch) return res.status(400).json({message: 'Incorrect password'})

    const token = await createdAccessToken({id: userFound._id})

    res.cookie('token', token)
    res.json(userFound)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const logout = (req, res) => {
  res.cookie('token', '', {
    expires: new Date(0)
  })
  res.sendStatus(200)
}

export const profile = async (req, res) => {
  const userFound = await User.findById(req.user.id)
  userFound
    ? res.json(userFound)
    : res.status(400).json({ message: 'User not found' })
}
