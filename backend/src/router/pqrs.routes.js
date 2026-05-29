import {Router} from 'express';

import{
    gettodasPQRS,
    getPQRSporid,
    postPQRS,
    putPQRS,
    deletePQRS
} from '../controller/pqrs.controller.js'

const router = Router();

router.get('/', gettodasPQRS);
router.get('/:id', getPQRSporid);
router.post('/', postPQRS);
router.put('/:id', putPQRS);
router.delete('/:id', deletePQRS);

export default router;