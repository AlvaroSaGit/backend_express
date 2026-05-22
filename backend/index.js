
const express = require('express')
const app = express()
const port = 3000

const taskRouter = require('./src/routes/task.routes')

app.use('/tasks', taskRouter)

app.get('/', (req, res) => {
  res.json ({
    saludo : 'Bienvenido al sistema'
  })
})

app.get('/aprendices', (req, res) => {
  res.json ({
    saludo: "Hola, bienvenido al sistema de aprendices",
    descripcion : "Aqui se mostraran todos los aprendices disponibles"
    })
})

app.get('/programas', (req, res) => {
  res.json (
    {
        saludo: "Hola, bienvenido al sistema de programas",
        descripcion: "Aqui se mostraran todos los programas disponibles"
    }
)
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})