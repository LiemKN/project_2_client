import React from 'react';
import { Thanks } from './Thanks';
import { Form } from './Form';

export function Emailform(props) {
  const emailToDisplay = props.emailToDisplay;

  if (emailToDisplay.isFinished) {
    return (
      <Thanks />
    );
  } else {
    return (
      <div className="emailform-root">
        <div className="emailform-heading">
          <h1>Code Time Capsule!</h1>
          <h4>Welcome! Here, you can type or paste a sample of your code and then we email you a copy of it sometime up to 10 years later so that you can see how you’ve grown. </h4>
        </div>
        <Form />
      </div>
    );
  }
}