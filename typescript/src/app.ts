import "./tracer"; // must come before importing any instrumented module.
import express from 'express';

const app = express();
const port = 3000;

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

