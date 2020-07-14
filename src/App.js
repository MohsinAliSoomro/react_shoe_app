import React, { useState } from 'react';
import './App.css';
import Routes from './routes'
import { countContext} from './GlobalState/states'
function App() {
  const countState = useState(0);
  return (
    <countContext.Provider value={countState}>
    <div className="App">
      <Routes />
    </div>
    </countContext.Provider>
  );
}

export default App;
