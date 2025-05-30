"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TiendanubeOAuth2Api = void 0;
class TiendanubeOAuth2Api {
    constructor() {
        this.name = 'tiendanubeApi';
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
                displayName: 'Authorization URL',
                name: 'authUrl',
                type: 'hidden',
                default: 'https://www.tiendanube.com/apps/authorize',
            },
            {
                displayName: 'Access Token URL',
                name: 'accessTokenUrl',
                type: 'hidden',
                default: 'https://www.tiendanube.com/apps/token',
            },
            {
                displayName: 'Redirect URI',
                name: 'redirectUri',
                type: 'string',
                default: '',
            },
            {
                displayName: 'Authentication',
                name: 'authentication',
                type: 'hidden',
                default: 'header',
            },
            {
                displayName: 'Token Type',
                name: 'tokenType',
                type: 'hidden',
                default: 'Bearer',
            },
        ];
    }
}
exports.TiendanubeOAuth2Api = TiendanubeOAuth2Api;
