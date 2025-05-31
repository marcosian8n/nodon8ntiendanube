"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.credentials = exports.nodes = void 0;
const Tiendanube_node_1 = require("./nodes/Tiendanube/Tiendanube.node");
const TiendanubeApi_credentials_1 = require("./credentials/TiendanubeApi.credentials");
exports.nodes = [Tiendanube_node_1.Tiendanube];
exports.credentials = [TiendanubeApi_credentials_1.TiendanubeApi];
