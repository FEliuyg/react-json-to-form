import {
  ArrayPanel,
  Boolean,
  ColorPicker,
  Input,
  InputNumber,
  Radio,
  Select,
  Slider,
  Upload,
} from './components';
import { JSONFormAtomicSchemaItemProps } from './interface';

interface FormItemProps {
  schema: JSONFormAtomicSchemaItemProps;
  onChange: (value: unknown) => void;
}

export default function FormItem({ schema, onChange }: FormItemProps) {
  // 非原始类型的
  if (schema.type === 'array') {
    return <ArrayPanel schema={schema} onChange={onChange} />;
  }

  // 原始类型的
  return (
    <div style={{ display: 'flex', marginBottom: 8 }}>
      <div style={{ width: 120, lineHeight: '32px' }}>{schema.displayName}</div>
      {getType(schema, onChange)}
    </div>
  );
}

function getType(schema: JSONFormAtomicSchemaItemProps, onChange: (value: unknown) => void) {
  switch (schema.type) {
    case 'input': {
      return <Input value={schema.value} onChange={onChange} />;
    }
    case 'number': {
      return <InputNumber />;
    }
    case 'color': {
      return <ColorPicker />;
    }
    case 'select': {
      return <Select />;
    }
    case 'boolean': {
      return <Boolean />;
    }
    case 'radio': {
      return <Radio />;
    }

    case 'slider': {
      return <Slider />;
    }
    case 'file': {
      return <Upload />;
    }
    default: {
      console.error('unknown type');
      return null;
    }
  }
}
