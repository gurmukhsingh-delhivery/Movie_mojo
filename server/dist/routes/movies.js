"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.movieRoutes = void 0;
const express_1 = require("express");
const movies_controller_1 = __importDefault(require("../controllers/movies.controller"));
class movieRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.setRoutes();
    }
    setRoutes() {
        this.router.get("/", movies_controller_1.default.getMovies);
        this.router.post("/", movies_controller_1.default.postMovie);
        this.router.get("/:id", movies_controller_1.default.get);
        this.router.delete("/:id", movies_controller_1.default.deleteMovie);
    }
}
exports.movieRoutes = movieRoutes;
