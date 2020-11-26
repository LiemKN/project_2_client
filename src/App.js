import React from 'react';
import './App.css';
import { useSelector } from 'react-redux';
import { Emailform } from './Emailform';

function App() {

  const emailToDisplay = useSelector(state => state.emailToDisplay);

  return (
    <div className="emailform-root">
      <aside className="lefter"></aside>
      <div className="chester">
        <Emailform emailToDisplay={emailToDisplay} />
      </div>
      <aside className="righter"></aside>
    </div>
  );
}

export default App;
