import type {
  IExecuteFunctions,
  INodeExecutionData,
  INodeType,
  INodeTypeDescription,
  ILoadOptionsFunctions,
} from 'n8n-workflow';

import { OptionsWithUri } from 'request';

import type { NodeConnectionType } from 'n8n-workflow';


export class Tiendanube implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Tiendanube',
		name: 'tiendanube',
		icon: 'file:tiendanube.svg',
		group: ['transform'],
		description: 'Consume la API de Tiendanube',
		defaults: {
			name: 'Tiendanube',
		},
		inputs: ['main' as NodeConnectionType],
		outputs: ['main' as NodeConnectionType],

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

		for (let i = 0; i < items.length; i++) {
			const options: OptionsWithUri = {
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

