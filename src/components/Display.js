import React from 'react';

const Display = ({ timerMinutes, timerSeconds }) => (
    <div>
        <p id="timer-label">Session</p>
        <p id="time-left">{ timerMinutes }:{ timerSeconds === 60 ? '00': timerSeconds }</p>
    </div>
);

export default Display;