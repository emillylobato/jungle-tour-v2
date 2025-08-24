import { Router } from "express";
import { sequelize } from "../config/db.js"; // importa a conexão com o BD

const router = Router();

// Sua rota original (mantida)
router.get("/", (req, res) => {
  res.json({
    status: "ok",
    service: "jungle-tour-api",
    uptime: process.uptime()
  });
});

//nova rota para testar o BD
router.get("/db-test", async (req, res) => {
  try {
    // Testa a conexão com uma query simples
    const [result] = await sequelize.query("SELECT 1 + 1 AS result");
    
    res.json({
      status: "ok",
      message: "Conexão com o BD validada com sucesso!",
      queryResult: result
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Falha na conexão com o BD",
      error: error.message
    });
  }
});

export default router;