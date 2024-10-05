const express = require('express')
const cors = require('cors')
const taskData = require('./data/task.json')

const app = express()

app.use(cors())

app.get('/random-task', (req, res) => {
  const randomIndex = Math.floor(Math.random() * taskData.length)
  const randomTask = taskData[randomIndex]
  res.json(randomTask)
})

const port = process.env.PORT || 4000
app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
