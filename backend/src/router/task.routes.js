
import { Router } from 'express';


const taskRouter = Router();
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
taskRouter.get('/', (req, res) => {
    res.json({
        mensaje: 'Listado de tareas',
    })
})

taskRouter.post('/', (req, res) => {
    res.json({
        mensaje: 'creacion de tareas'
    })
})
taskRouter.put('', (req, res) => {
    res.json({
        mensaje: 'actualizando una tarea'
    })
})
taskRouter.delete('', (req, res) => {
    res.json({
        mensaje: 'eliminado una  tarea'
    })
})

export default taskRouter;

