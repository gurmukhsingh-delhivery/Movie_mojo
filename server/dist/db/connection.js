"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getConnection = void 0;
const cassandra_driver_1 = __importDefault(require("cassandra-driver"));
const server_constants_1 = require("../constants/server.constants");
// connect to databse
const getConnection = () => {
    const client = new cassandra_driver_1.default.Client({
        contactPoints: [server_constants_1.NODE_IP],
        localDataCenter: server_constants_1.DATA_CENTER,
        keyspace: server_constants_1.KEYSPACE
    });
    client.connect((err) => {
        if (err) {
            console.error('There was an error connecting to the database:', err);
        }
        else {
            console.log('Connected to the database');
        }
    });
    return client;
};
exports.getConnection = getConnection;
