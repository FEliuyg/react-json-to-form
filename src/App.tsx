import JsonForm from '.';
import { schema } from './mock-data';

function App() {
  const handleChange = (value: unknown) => {
    console.log(value);
  };

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ flex: 1 }}>Left</div>
      <div style={{ width: 330 }}>
        <JsonForm schema={schema} onChange={handleChange} />
      </div>
    </div>
  );
}

export default App;
