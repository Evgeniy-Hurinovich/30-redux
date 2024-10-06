const express = require('express')
const cors = require('cors')
const taskData = require('./data/task.json')

const app = express()

app.use(cors())

function getRandomTask() {
  const randomIndex = Math.floor(Math.random() * taskData.length)
  const randomTask = taskData[randomIndex]
  return randomTask
}
app.get('/random-task', (req, res) => {
  res.json(getRandomTask())
})

app.get('/random-task-delayed', (req, res) => {
  setTimeout(() => {
    res.json(getRandomTask())
  }, 2000)
})

const port = process.env.PORT || 4000
app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
