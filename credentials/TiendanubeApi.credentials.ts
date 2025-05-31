import {
  ICredentialType,
  INodeProperties,
} from 'n8n-workflow';

export class TiendanubeApi implements ICredentialType {
  name = 'tiendanubeApi';
  displayName = 'TiendaNube API';
  documentationUrl = 'https://dev.tiendanube.com/docs/api';

  properties: INodeProperties[] = [
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
