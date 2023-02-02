"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const server_constants_1 = require("./constants/server.constants");
// const PORT = process.env.PORT;
app_1.default.listen(server_constants_1.PORT, () => console.log(`Listening on port ${server_constants_1.PORT}`));
