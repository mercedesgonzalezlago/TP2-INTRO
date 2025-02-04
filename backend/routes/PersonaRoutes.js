import { Router } from 'express';
import {
    actualizarPersona,
    crearPersona,
    eliminarPersona,
    obtenerPersonaPorId,
    obtenerPersonas
} from "../controller/PersonaController.js";

const router = Router();

router.get('/', obtenerPersonas);
router.get('/:id', obtenerPersonaPorId);
router.post('/', crearPersona);
router.put('/:id', actualizarPersona);
router.delete('/:id', eliminarPersona);

export default router;

