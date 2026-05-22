const express = require('express')
const taskRouter = express.Router()


taskRouter.get('/', (req, res) => {
    res.json({
        "mensaje": "se va a listar las tareas "
    })
})
taskRouter.post('/aprendices', (req, res) => {
    res.json([
        {
            "mensaje": "creacion de tareas",
        },
    ]);
});


module.exports = taskRouter;
