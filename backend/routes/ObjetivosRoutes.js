import { Router } from 'express';
import {
    crearObjetivo,
    obtenerObjetivos,
    obtenerObjetivoPorId,
    actualizarObjetivo,
    eliminarObjetivo
} from '../controller/ObjetivoController.js';

const router = Router();

router.post('/', crearObjetivo);
router.get('/', obtenerObjetivos);
router.get('/:id', obtenerObjetivoPorId);
router.put('/:id', actualizarObjetivo);
router.delete('/:id', eliminarObjetivo);

export default router;
