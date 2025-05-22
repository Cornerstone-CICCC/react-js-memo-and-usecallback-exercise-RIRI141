import "./App.css"
import  { useState } from 'react';
import Profile from './Profile';
import ProductList from './ProductList';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>React memo and useCallback Demo</h1>
      
      <section>
        <h2>memo Demo</h2>
        <button onClick={() => setCount(count + 1)}>
          Increment Count: {count}
        </button>
        <Profile firstname="John" lastname="Doe" />
      </section>

      <section>
        <h2>useCallback Demo</h2>
        <ProductList />
      </section>
    </div>
  );
}

export default App;