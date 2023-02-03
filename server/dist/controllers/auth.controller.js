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
const client = (0, connection_1.getConnection)();
class authController {
    static register(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = (0, nanoid_1.nanoid)();
            const user = req.body;
            const query = 'INSERT INTO users (id, dob, password, username) VALUES (?, ?, ?, ?)';
            const params = [id, user.dob, user.password, user.username];
            client.connect()
                .then(() => client.execute(query, params, { prepare: true }))
                .then(resp => {
                // console.log("sent the data to post route")
                res.send("posting the data into the scylladb database");
            })
                .catch(err => res.send(err));
            // res.send("registered the user");
        });
    }
    static login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("got to the login route");
            const { username, password } = req.body;
            const query = 'SELECT * FROM USERS WHERE username = ?';
            const params = [username];
            client.connect()
                .then(() => client.execute(query, params, { prepare: true }))
                .then(resp => {
                // console.log("sent the data to post route")
                // res.send(resp.rows);
                if (resp.rows[0].password == password) {
                    console.log("correct password");
                    res.send("user logged in");
                }
                else {
                    console.log("wrong password");
                    res.render("wrong password or username");
                }
            })
                .catch(err => res.send(err));
            // res.send("registered the user");
        });
    }
}
exports.default = authController;
