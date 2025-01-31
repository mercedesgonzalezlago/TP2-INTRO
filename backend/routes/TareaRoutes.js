import { Router } from 'express';
import {
    crearTarea,
    obtenerTarea,
    obtenerTareaPorId,
    actualizarTarea,
    eliminarTarea
} from '../controller/TareaController.js';

const router = Router();

router.post('/', crearTarea);
router.get('/', obtenerTarea);
router.get('/:id', obtenerTareaPorId);
router.put('/:id', actualizarTarea);
router.delete('/:id', eliminarTarea);

export default router;
