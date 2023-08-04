import User from '../models/user.model.js'
import bcrypt from 'bcryptjs'
import { createdAccessToken } from '../libs/jwt.js'

export const register = async (req, res) => {
  const { userName, password, email } = req.body;

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
    res.status(500).json({ message: error.message });
  }
}

export const login = async (req, res) => {}
