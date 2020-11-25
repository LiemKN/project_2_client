import React from 'react';

export function Emailform(props) {
  const emailform = props.emailform;

  return (
    <div className="emailform">
      <div>
        <p>Email</p>
        <input type="text" />
      </div>
      <div>
        <p>Code Snippet</p>
        <textarea />
      </div>
      <div className="send-date">
        <span>Year</span>
        <input type="text"/>
        <span>Month</span>
        <input type="text"/>
        <span>Day</span>
        <input type="text"/>
      </div>
    </div>
  );
}