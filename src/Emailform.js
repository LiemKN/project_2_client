import React from 'react';
import { Thanks } from './Thanks';
import { Form } from './Form';
import { useDispatch, useSelector } from 'react-redux';
import { retrieveEmail } from './actions';

export function Emailform(props) {
  const dispatch = useDispatch;
  const emailToDisplay = props.emailToDisplay;
  const isCreated = useSelector(state => state.isCreated);
  const id = useSelector(state => state.id);
  const code = useSelector(state => state.code);

  const onLoad = () => {
    dispatch(retrieveEmail(id));
  }

  if (emailToDisplay.isFinished) {
    return (
      <Thanks />
    );
  } else if (isCreated) {
    return (
      <div className="emailform-root">
        <div className="emailform-heading">
          <h1>Code Time Capsule!</h1>
          <h4>Welcome! Here, you can type or paste a sample of your code and then we email you a copy of it sometime up to 10 years later so that you can see how you’ve grown. </h4>
        </div>
        <Form />
        <div className="code-view">
          <h1>Here's your most recently made message! </h1>
          <h4>(This is currently view-only and formatting is not preserved yet.)</h4>
          <button className="view-recent-button" onClick={onLoad}>Load Message</button>
          <textarea placeholder="Click the button above to load in your message">{code}</textarea>
        </div>
      </div>
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