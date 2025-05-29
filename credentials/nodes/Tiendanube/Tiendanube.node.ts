import {
  IExecuteFunctions,
} from 'n8n-workflow';
import {
  INodeType,
  INodeTypeDescription,
  INodeExecutionData,
} from 'n8n-workflow';

export class Tiendanube implements INodeType {
  description: INodeTypeDescription = {
    displayName: 'TiendaNube',
    name: 'tiendanube',
    icon: 'file:tiendanube.svg',
    group: ['transform'],
    version: 1,
    description: 'Interacción con la API de TiendaNube',
    defaults: {
      name: 'TiendaNube',
    },
    inputs: ['main'],
    outputs: ['main'],
    credentials: [
      {
        name: 'tiendanubeOAuth2Api',
        required: true,
      },
    ],
    properties: [
      {
        displayName: 'Operación',
        name: 'operation',
        type: 'options',
        options: [
          {
            name: 'Obtener Productos',
            value: 'getProducts',
          },
        ],
        default: 'getProducts',
        description: 'La operación a realizar.',
      },
    ],
  };

  async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
    const items = this.getInputData();
    const returnData: INodeExecutionData[] = [];

    const credentials = await this.getCredentials('tiendanubeOAuth2Api');
    const accessToken = credentials.accessToken;

    const response = await this.helpers.requestWithAuthentication.call(this, 'tiendanubeOAuth2Api', {
      method: 'GET',
      url: 'https://api.tiendanube.com/v1/products',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
    });

    for (const product of response) {
      returnData.push({ json: product });
    }

    return [returnData];
  }
}
