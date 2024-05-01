import React from 'react';

import Main from './components/Main';
import AssetContextProvider from './components/asset-provider/AssetContextProvider';

import './App.css';

function App() {
  return (
    <div>
      <AssetContextProvider>
        <Main />
      </AssetContextProvider>
    </div>
  );
}

export default App;
