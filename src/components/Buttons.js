import React from 'react';
import './Buttons.css';

const Buttons = ({ handleResetButton, handleStartButton }) => (
    <div id="buttons">
      <p id="start_stop" onClick={ handleStartButton }>
        <i className="fas fa-play"></i>
        <i className="fas fa-pause"></i>
      </p>
      <p id="reset" onClick={ handleResetButton }>
        <i className="fas fa-undo"></i>
      </p>
    </div>
);

export default Buttons;