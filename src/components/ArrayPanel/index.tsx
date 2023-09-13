import { useState } from 'react';
import { Collapse, Tabs } from '@easyv/react-components';
import { PlusOutlined, DeleteOutlined } from '@easyv/react-icons';
import JsonForm from '../../index.tsx';
import { JSONFormArraySchemaItem } from '../../interface.ts';
import { Tip } from '../index.ts';

interface ArrayPanelProps {
  schema: JSONFormArraySchemaItem;
  onChange: (value: unknown) => void;
}

export default function ArrayPanel({ schema, onChange }: ArrayPanelProps) {
  const [activeKeys, setKeys] = useState<string[]>([]);

  return (
    <Collapse
      onChange={(_, keys) => {
        setKeys(keys);
      }}
    >
      <Collapse.Item
        header={
          <div>
            <span>{schema.displayName}</span>
            <Tip tip={schema.tip} />
          </div>
        }
        name='1'
        extra={
          activeKeys.includes('1') && (
            <div style={{ fontSize: 16 }}>
              <PlusOutlined />
              <DeleteOutlined style={{ marginLeft: 8 }} />
            </div>
          )
        }
      >
        <Tabs>
          {schema.value.map((item) => (
            <Tabs.TabPane title={item.displayName} key='1'>
              <JsonForm schema={item.value} onChange={onChange} />
            </Tabs.TabPane>
          ))}
        </Tabs>
      </Collapse.Item>
    </Collapse>
  );
}
