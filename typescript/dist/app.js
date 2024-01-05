"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./tracer"); // must come before importing any instrumented module.
const express_1 = __importDefault(require("express"));
require("dotenv/config");
const dd_trace_1 = __importDefault(require("dd-trace"));
dd_trace_1.default.init({
    env: process.env.DD_ENV,
    service: process.env.DD_SERVICE,
    version: process.env.DD_VERSION,
    // Outras configurações, se necessário
});
const app = (0, express_1.default)();
const port = 3000;
console.log("DD_ENV:", process.env.DD_ENV);
console.log("DD_SERVICE:", process.env.DD_SERVICE);
console.log("DD_VERSION:", process.env.DD_VERSION);
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
