"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.credentials = exports.nodes = void 0;
const Tiendanube_node_1 = require("./nodes/Tiendanube/Tiendanube.node");
const TiendanubeOAuth2Api_credentials_1 = require("./credentials/TiendanubeOAuth2Api.credentials");
exports.nodes = [Tiendanube_node_1.Tiendanube];
exports.credentials = [TiendanubeOAuth2Api_credentials_1.TiendanubeOAuth2Api];
