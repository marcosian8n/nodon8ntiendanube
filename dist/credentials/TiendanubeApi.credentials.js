"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TiendanubeApi = void 0;
class TiendanubeApi {
    constructor() {
        this.name = 'tiendanubeApi';
        this.displayName = 'TiendaNube API';
        this.documentationUrl = 'https://dev.tiendanube.com/docs/api';
        this.properties = [
            {
                displayName: 'Access Token',
                name: 'accessToken',
                type: 'string',
                default: '',
                description: 'Token de acceso generado desde la app Tiendanube (Render)',
            },
            {
                displayName: 'Store ID',
                name: 'storeId',
                type: 'string',
                default: '',
                description: 'ID de la tienda obtenida luego de autorizar la app',
            },
        ];
    }
}
exports.TiendanubeApi = TiendanubeApi;
