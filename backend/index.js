

import express from 'express'
const app = express()
const port = 3001;

import taskRouter from "./src/router/task.routes.js";
import usersRouter from "./src/router/users.router.js";
import pqrsRouter from "./src/router/pqrs.routes.js";

app.use(express.json());
app.use('/backend_express/task', taskRouter)
app.use('/backend_express/users', usersRouter)
app.use('/backend_express/pqrs', pqrsRouter)


app.listen(port, "0.0.0.0", () => {
  console.log(`servidor en el puerto ${port}`)
})


