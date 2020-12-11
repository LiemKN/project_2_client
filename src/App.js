import React from 'react';
import './App.css';
import { useSelector } from 'react-redux';
import { Emailform } from './Emailform';

function App() {

  const emailToDisplay = useSelector(state => state.emailToDisplay);
  const isWaiting = useSelector(state => state.isWaiting);

  return (
    <div className="code-time-capsule-root">
      <aside className="lefter"></aside>
      <div className="chester">
        <Emailform emailToDisplay={emailToDisplay} />
      </div>
      <aside className="righter">
        {isWaiting && <div className="loader" />}
      </aside>
    </div>
  );
}

export default App;
