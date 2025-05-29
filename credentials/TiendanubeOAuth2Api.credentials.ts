import {
  ICredentialType,
  INodeProperties,
} from 'n8n-workflow';

export class TiendanubeOAuth2Api implements ICredentialType {
  name = 'tiendanubeApi';
  displayName = 'TiendaNube OAuth2 API';
  documentationUrl = 'https://dev.tiendanube.com/docs/api';
  extends = ['oAuth2Api'];
  properties: INodeProperties[] = [
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
