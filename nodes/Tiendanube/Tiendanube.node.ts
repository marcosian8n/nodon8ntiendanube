import type { NodeConnectionType } from 'n8n-workflow';

import type {
  IExecuteFunctions,
  INodeExecutionData,
  INodeType,
  INodeTypeDescription,
} from 'n8n-workflow';

import type { IRequestOptions } from 'n8n-workflow';

export class Tiendanube implements INodeType {
  description: INodeTypeDescription = {
    displayName: 'Tiendanube',
    name: 'tiendanube',
    icon: 'file:tiendanube.svg',
    group: ['transform'],
    version: 1,
    description: 'Consume la API de Tiendanube',
    defaults: {
      name: 'Tiendanube',
    },
    inputs: ['main'] as NodeConnectionType[],
    outputs: ['main'] as NodeConnectionType[],

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

  async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
    const items = this.getInputData();
    const returnData: INodeExecutionData[] = [];

    const credentials = await this.getCredentials('tiendanubeApi');
    const storeId = credentials.storeId as string;
    const accessToken = credentials.accessToken as string;

    for (let i = 0; i < items.length; i++) {
      const options: IRequestOptions = {
        method: 'GET',
        url: `https://api.tiendanube.com/v1/${storeId}/products`,
        json: true,
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
      };

      const responseData = await this.helpers.request(options);
      returnData.push({ json: responseData });
    }

    return [returnData];
  }
}
