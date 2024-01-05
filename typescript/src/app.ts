import "./tracer"; // must come before importing any instrumented module.
import express from 'express';
import 'dotenv/config';
import tracer from 'dd-trace';

tracer.init({
  env: process.env.DD_ENV,
  service: process.env.DD_SERVICE,
  version: process.env.DD_VERSION,
  // Outras configurações, se necessário
});

const app = express();
const port = 3000;

console.log("DD_ENV:", process.env.DD_ENV);
console.log("DD_SERVICE:", process.env.DD_SERVICE);
console.log("DD_VERSION:", process.env.DD_VERSION);

// Servir arquivos estáticos da pasta 'public'
app.use(express.static('public'));


// Rota para gerar log
app.get('/generate-log', (req, res) => {
    console.log('api-nodejs-working');
    res.json({ message: 'Log gerado' });
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});

export default app;

