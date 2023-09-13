import { Input } from '@easyv/react-components';
import { useState, useEffect } from 'react';

interface EasyInputProps {
  value: string;
  onChange: (value: string) => void;
}

export default function EasyInput({ value, onChange }: EasyInputProps) {
  const [val, setVal] = useState(value);

  useEffect(() => {
    if (val !== value) {
      setVal(value);
    }
  }, [value]);

  const handleBlur = () => {
    if (value !== val) {
      onChange(val);
    }
  };

  return <Input value={val} onChange={setVal} onBlur={handleBlur} />;
}
