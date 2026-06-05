import {getusers} from '../models/users.model.js'

export const listUsers=(req, res) => {
    res.json({
        mensaje: 'listando todos los usuarios en el controlador',
        data: getusers,
    })
}

export const postUser=(req, res) => {
    res.json({
        mensaje: 'creando un nuevo usuario en el controlador',
        data: getusers,
    })
}

export const putUser=(req, res) => {
    res.json({
        mensaje: 'actualizando un usuario en el controlador'
    })
}

export const deleteUser=(req, res) => {
    res.json({
        mensaje: 'eliminando un usuario en el controlador'
    })
}