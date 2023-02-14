import React, { useState } from 'react';
import UserContext, { User, UserContextValue } from './UserContext';
import AppBar from './components/AppBar';
import UserContextProvider from './components/UserContextProvider';

function App() {

  return (
    <UserContextProvider>
      <AppBar />
    </UserContextProvider>
  )
}

export default App;

/* <div style={{ display: 'flex' }}>
        <PanelComponent>
          <h3>Alma</h3>
          <button style={{ 'padding': '3px' }}>alma gomb</button>
        </PanelComponent>
        <PanelComponent>
          <h3>Körte</h3>
          <p>a körte egész finom</p>
        </PanelComponent>
      </div>
    </> */