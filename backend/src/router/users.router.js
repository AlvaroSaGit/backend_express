
import { Router } from 'express';
const usersRouter = Router();
import {
    listUsers,
    postUser,
    putUser,
    deleteUser
} from '../controller/user.controller.js';
/*
const tasks = [
    {
        id: 1,
        title: 'Tarea 1',
        description: 'Descripción de la tarea 1',
        status: 'pendiente'
    },
    {
        id: 2,
        title: 'Tarea 2',
        description: 'Descripción de la tarea 2',
        status: 'completada'
    }
]
*/

usersRouter.get("/", listUsers)
usersRouter.post("/", postUser)
usersRouter.put("/:id", putUser)
usersRouter.put("/", putUser)
usersRouter.delete("/:id", deleteUser)
usersRouter.delete("/", deleteUser)

/*
usersRouter.get('/users', (req, res) => {
    res.json({
        mensaje: 'Listado de usuarios',
    })
})

usersRouter.post('/users', (req, res) => {
    res.json({
        mensaje: 'creacion de usuarios'
    })
})
usersRouter.put('/users', (req, res) => {
    res.json({
        mensaje: 'actualizando un usuario'
    })
})
usersRouter.delete('/users', (req, res) => {
    res.json({
        mensaje: 'eliminado un usuario'
    })
})
*/
export default usersRouter;

