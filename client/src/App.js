import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [state, setState] = useState({ users: [] });

  useEffect(() => {}, []);

  return (
    <div className="App">
      <h1>Users</h1>
    </div>
  );
}

export default App;
