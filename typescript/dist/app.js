"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./tracer"); // must come before importing any instrumented module.
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
// Servir arquivos estáticos da pasta 'public'
app.use(express_1.default.static('public'));
// Rota para gerar log
app.get('/generate-log', (req, res) => {
    console.log('api-nodejs-working');
    res.json({ message: 'Log gerado' });
});
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
exports.default = app;
