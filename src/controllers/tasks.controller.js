import Task from '../models/task.model.js'

export const getTasks = async (req, res) => {
  const tasks = await Task.find({
    user: req.user.id
  }).populate('user')
  res.json(tasks)
}

export const getTask = async (req, res) => {
  const tasks = await Task.findById(req.params.id).populate('user')
  if (!tasks) return res.status(403).json({message: 'Task not found'})
  res.json(tasks)
}

export const createTask = async (req, res) => {
  const { title, description, date } = req.body

  const newTask = new Task({
    title, 
    description,
    date,
    user: req.user.id,
  })
  const saveTask = await newTask.save()
  res.json(saveTask)
}

export const updateTask = async (req, res) => {
  const tasks = await Task.findByIdAndUpdate(req.params.id, req.body, {new: true})
  if (!tasks) return res.status(403).json({message: 'Task not found'}) 
  res.json(tasks)
}

export const deleteTask = async (req, res) => {
  const tasks = await Task.findByIdAndDelete(req.params.id)
  if (!tasks) return res.status(403).json({message: 'Task not found'})
  res.json(tasks)
}
