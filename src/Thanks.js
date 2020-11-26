import React from 'react';
import { useDispatch } from 'react-redux';
import { leaveView } from './actions';

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

export function Thanks(props) {
  const email = props.email;
  const dispatch = useDispatch();
  
  const onBack = () => {
    dispatch(leaveView(email))
  }

  return (
    <div className="email-to-display">
      <h1>Thanks for using Code Time Capsule!</h1>
      <p>Your message will be sent to {email.email_address} on {months[email.send_month - 1]} {email.send_day}, {email.send_year}.</p>
      <button onClick={onBack}>Back</button>
    </div>
  );
}