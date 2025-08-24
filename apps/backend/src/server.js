import 'dotenv/config';
import app from "./app.js";
import { testeConnection } from "./config/db.js";

const PORT = process.env.PORT || 3001;

await testeConnection();

app.listen(PORT, () => {
  console.log (`API rodando na porta ${PORT}`);
});