import 'dotenv/config';
import app from "./app.js";
import { sequelize, testeConnection } from "./config/db.js";
import './models/associations.js';

const PORT = process.env.PORT || 3005;

async function startServer() {
  try {
    await testeConnection();
    console.log("Conexão com MySQL OK");
    
    app.listen(PORT, '127.0.0.1', () => {
      console.log(`API rodando em http://127.0.0.1:${PORT}`);
      console.log(`🔍 Teste de rotas:`);
      console.log(`   POST http://localhost:${PORT}/api/auth/register`);
      console.log(`   POST http://localhost:${PORT}/api/auth/login`);
      console.log(`   GET http://localhost:${PORT}/api/usuarios`);
      console.log(`   POST http://localhost:${PORT}/api/estabelecimentos`);
      console.log(`   POST http://localhost:${PORT}/api/combos`);
      console.log(`   GET http://localhost:${PORT}/api/comentarios`);
    });
    
  } catch (error) {
    console.error('❌ Erro ao iniciar servidor:', error.message);
    process.exit(1);
  }
}

startServer();