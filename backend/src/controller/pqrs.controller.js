import { listapqrs } from '../models/pqrs.model.js';

// 1. OBTENER TODAS LAS PQRS (GET)
export const gettodasPQRS = (req, res) => {
    res.json({
        mensaje: 'listando todas las pqrs en el controlador',
        datos: listapqrs
    });
};

// 2. OBTENER POR ID (GET)
export const getPQRSporid = (req, res) => {
    const id = parseInt(req.params.id);
    const pqrs = listapqrs.find(pqr => pqr.id === id);
    
    if (!pqrs) {
        return res.status(404).json({ mensaje: "PQRS no encontrada" });
    }
    // ✔️ CORREGIDO: Devolvemos 'pqrs' (la encontrada), no todo el arreglo
    res.json({ datos: pqrs }); 
};

// 3. CREAR NUEVA PQRS (POST)
export const postPQRS = (req, res) => {
    const { tipo, descripcion } = req.body;

    if (!tipo || !descripcion) {
        return res.status(400).json({ mensaje: "El tipo y la descripcion son obligatorios" });
    }

    const nuevaPQRS = {
        id: listapqrs.length > 0 ? listapqrs[listapqrs.length - 1].id + 1 : 1,
        tipo,
        descripcion,
        estado: "Pendiente" 
    };

    listapqrs.push(nuevaPQRS);
    
    // ✔️ CORREGIDO: Se eliminó la línea fantasma que estaba suelta aquí abajo
    res.status(201).json({ mensaje: "PQRS registrada con éxito", datos: nuevaPQRS });
};

// 4. ACTUALIZAR PQRS (PUT)
export const putPQRS = (req, res) => {
    const id = parseInt(req.params.id);
    const { tipo, descripcion, estado } = req.body;

    const pqrsIndex = listapqrs.findIndex(pqr => pqr.id === id);
    if (pqrsIndex === -1) {
        return res.status(404).json({ mensaje: "PQRS no encontrada" });
    }

    listapqrs[pqrsIndex] = {
        ...listapqrs[pqrsIndex],
        tipo: tipo || listapqrs[pqrsIndex].tipo,
        descripcion: descripcion || listapqrs[pqrsIndex].descripcion,
        estado: estado || listapqrs[pqrsIndex].estado
    };

    res.json({ mensaje: "PQRS actualizada con éxito", datos: listapqrs[pqrsIndex] });
};

// 5. ELIMINAR PQRS (DELETE)
export const deletePQRS = (req, res) => {
    const id = parseInt(req.params.id);
    const pqrsIndex = listapqrs.findIndex(pqr => pqr.id === id);
    if (pqrsIndex === -1) {
        return res.status(404).json({ mensaje: `PQRS con ID ${id} no encontrada` });
    }

    listapqrs.splice(pqrsIndex, 1);
    res.json({ mensaje: `PQRS con ID ${id} eliminada correctamente` });
};