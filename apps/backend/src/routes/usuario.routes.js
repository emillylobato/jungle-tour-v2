import { Router } from "express";
import { getUsuarios, getUsuarioById, updateUsuario, deleteUsuario } from "../controllers/usuarioController.js";

const router = Router();

router.get("/", getUsuarios);
router.get("/:id", getUsuarioById);
router.put("/:id", updateUsuario);
router.delete("/:id", deleteUsuario);

export default router;
