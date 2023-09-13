import { JSONFormSchemaProps } from './interface';

export const schema: JSONFormSchemaProps = [
  {
    type: 'array',
    displayName: '场景',
    name: 'scene',
    tip: '场景有多个状态',
    value: [
      {
        displayName: '状态1',
        name: 'state1',
        value: [
          {
            type: 'input',
            displayName: '状态名称',
            name: 'name',
            value: '状态1',
          },
          {
            type: 'color',
            displayName: '环境光颜色',
            name: 'color',
            value: '#fff',
          },
          {
            type: 'slider',
            displayName: '环境光强度',
            name: 'tight',
            value: 1,
          },
          {
            displayName: 'HDR',
            name: 'hdr',
            value: [
              {
                type: 'file',
                displayName: '贴图',
                name: 'url',
                value: '',
              },
              {
                type: 'boolean',
                displayName: '启用HDR',
                name: 'enable',
                value: false,
              },
            ],
          },
        ],
      },
    ],
    template: {
      displayName: '状态1',
      name: 'state1',
      value: [
        {
          type: 'input',
          displayName: '状态名称',
          name: 'name',
          value: '状态1',
        },
        {
          type: 'color',
          displayName: '环境光颜色',
          name: 'color',
          value: '#fff',
        },
        {
          type: 'slider',
          displayName: '环境光强度',
          name: 'color',
          value: 1,
        },
        {
          displayName: 'HDR',
          name: 'hdr',
          value: [
            {
              type: 'file',
              displayName: '贴图',
              name: 'url',
              value: '',
            },
            {
              type: 'boolean',
              displayName: '启用HDR',
              name: 'enable',
              value: false,
            },
          ],
        },
      ],
    },
  },
];
