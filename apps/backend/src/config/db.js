import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize (
   process.env.DB_NAME,
   process.env.DB_USER,
   process.env.DB_PASS,
    {
      host: process.env.DB_HOST,
      dialect: "mysql",
      logging: false
    }
);

export async function testeConnection() {
   try {
     await sequelize.authenticate();
     console.log(" Conexão com MySQL OK ");
   } catch (e) {
     console.error(" Erro ao conectar no MySQL:", e.message);
     process.exit(1);
  }
}