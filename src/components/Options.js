import React from 'react';
import './Options.css';

const Options = ({ breakLength, sessionLength, handleOptionsButtons }) => (
  <div id="options" onClick={ handleOptionsButtons }>
    <div id="break-options">
      <p id="break-label">Break Length</p>
      <p><i id="break-increment" className="fas fa-2x fa-caret-up"></i></p>
      <p id="break-length">{ breakLength }</p>
      <p><i id="break-decrement" className="fas fa-2x fa-caret-down"></i></p>
    </div>
    <div id="session-options">
      <p id="session-label">Session Length</p>
      <p><i id="session-increment" className="fas fa-2x fa-caret-up"></i></p>
      <p id="session-length">{ sessionLength }</p>
      <p><i  id="session-decrement" className="fas fa-2x fa-caret-down"></i></p>
    </div>
  </div>
);

export default Options;