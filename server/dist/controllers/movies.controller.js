"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = require("../db/connection");
const nanoid_1 = require("nanoid");
const fetch = require("node-fetch");
const client = (0, connection_1.getConnection)();
class MyController {
    static getMovies(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //  res.send("get all the movies data")
            client.connect()
                .then(() => client.execute('SELECT * FROM movies'))
                .then(result => res.send(result.rows))
                .catch(err => res.send(err));
        });
    }
    static get(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            const query = 'SELECT * FROM movies WHERE id = ?';
            const params = [id];
            client.connect()
                .then(() => client.execute(query, params, { prepare: true }))
                .then(resp => res.send(resp.rows))
                .catch(err => res.send(err));
        });
    }
    static postMovie(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const movie = req.body;
            const query = 'INSERT INTO movies (id,genre,img,releaseDate,title) VALUES (?,?, ?, ?, ?)';
            const params = [(0, nanoid_1.nanoid)(), movie.Genre, movie.Images[0], '2011-02-03', movie.Title];
            client.connect()
                .then(() => client.execute(query, params, { prepare: true }))
                .then(resp => {
                // console.log("sent the data to post route")
                res.send("got to the post route");
            })
                .catch(err => res.send("cant post data"));
        });
    }
    static deleteMovie(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            const query = 'DELETE FROM movies WHERE id = ?';
            const params = [id];
            client.connect()
                .then(() => client.execute(query, params, { prepare: true }))
                .then(resp => res.send(resp))
                .catch(err => res.send(err));
        });
    }
}
exports.default = MyController;
