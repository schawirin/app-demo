"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// tracer.ts
const dd_trace_1 = __importDefault(require("dd-trace"));
dd_trace_1.default.init(); // Inicializa o tracer do Datadog
exports.default = dd_trace_1.default;
