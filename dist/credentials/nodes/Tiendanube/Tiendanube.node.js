"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tiendanube = void 0;
class Tiendanube {
    constructor() {
        this.description = {
            displayName: 'Tiendanube',
            name: 'tiendanube',
            icon: 'file:tiendanube.svg',
            group: ['transform'],
            description: 'Consume la API de Tiendanube',
            defaults: {
                name: 'Tiendanube',
            },
            inputs: ['main'],
            outputs: ['main'],
            credentials: [
                {
                    name: 'tiendanubeApi',
                    required: true,
                },
            ],
            properties: [
                {
                    displayName: 'Recurso',
                    name: 'resource',
                    type: 'options',
                    options: [
                        {
                            name: 'Productos',
                            value: 'products',
                        },
                    ],
                    default: 'products',
                },
            ],
        };
    }
    async execute() {
        const items = this.getInputData();
        const returnData = [];
        for (let i = 0; i < items.length; i++) {
            const options = {
                method: 'GET',
                uri: 'https://api.tiendanube.com/v1/products',
                json: true,
                headers: {
                    Authentication: 'Bearer {{your_access_token}}',
                },
            };
            const responseData = await this.helpers.request(options);
            returnData.push({ json: responseData });
        }
        return [returnData];
    }
}
exports.Tiendanube = Tiendanube;
