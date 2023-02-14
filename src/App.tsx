import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import AppendText from './components/appendText'
import Counter from './components/counter'
import UserCard from './components/user.card';
import CounterClass from './components/CounterClass';
import Clock from './components/Clock';
import ClockFunction from './components/ClockFunction';
import Test from './components/Test';
import CounterButtons from './components/CounterButtons';
import FormOnlyCapital from './components/FormOnlyCapital';
import PanelComponent from './components/PanelComponent';
import Accrodion from './components/Accordion';
import MeetingRoomList from './components/MeetingRoomList'
import Record from './components/Record';
import UserContext, { User, UserContextValue } from './UserContext';
import UserDataPanel from './components/UserDataPanel';
import AppBar from './components/AppBar';

function App() {
  const [user, setUser] = useState<User | null>(null);

  const userContextValue: UserContextValue = {
    user,
    login: () => { },
    logout: () => { }
  }

  return (
    <UserContext.Provider value={userContextValue}>
      <AppBar />
    </UserContext.Provider>
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