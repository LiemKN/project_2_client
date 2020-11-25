import React from 'react';
import './App.css';
import { Emailform } from './Emailform';
import { useDispatch } from 'react-redux';
import { sendEmail } from './actions';

function App() {
  const dispatch = useDispatch();

  const send = () => {
    dispatch(sendEmail());
  }

  return (
    <div className="App">
      <aside className="lefter"></aside>
      <div className="chester">
        <Emailform />
        <button onClick={send}>Send Email!</button>
      </div>
      <aside className="righter"></aside>
    </div>
  );
}

export default App;
