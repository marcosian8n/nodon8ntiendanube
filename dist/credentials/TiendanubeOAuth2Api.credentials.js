"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TiendanubeOAuth2Api = void 0;
class TiendanubeOAuth2Api {
    constructor() {
        this.name = 'tiendanubeOAuth2Api';
        this.displayName = 'TiendaNube OAuth2 API';
        this.documentationUrl = 'https://dev.tiendanube.com/docs/api';
        this.extends = ['oAuth2Api'];
        this.properties = [
            {
                displayName: 'Client ID',
                name: 'clientId',
                type: 'string',
                default: '',
            },
            {
                displayName: 'Client Secret',
                name: 'clientSecret',
                type: 'string',
                default: '',
            },
            {
                displayName: 'Redirect URI',
                name: 'redirectUri',
                type: 'string',
                default: '',
            },
        ];
    }
}
exports.TiendanubeOAuth2Api = TiendanubeOAuth2Api;
