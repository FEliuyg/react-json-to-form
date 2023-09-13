import { Collapse } from '@easyv/react-components';
import type { JSONFormProps } from './interface';
import FormItem from './FormItem';
import './index.less';
import { Tip } from './components';

export default function JsonForm({ schema, onChange }: JSONFormProps) {
  return (
    <div>
      {schema.map((item) => {
        if ('type' in item) {
          return <FormItem key={item.name} schema={item} onChange={onChange} />;
        } else {
          return (
            <Collapse key={item.name}>
              <Collapse.Item
                name='1'
                header={
                  <div>
                    <span>{item.displayName}</span>
                    <Tip tip={item.tip} />
                  </div>
                }
              >
                <JsonForm schema={item.value} onChange={onChange} />
              </Collapse.Item>
            </Collapse>
          );
        }
      })}
    </div>
  );
}
