import React from 'react';

const displayDigits = (units) => {
    units = units.toString();
    if(units.length === 1) {
        return `0${units}`;
    } else {
        return units.toString();
    }
}

const Display = ({ sessionSeconds, breakSeconds, inBreak }) => (
    <div>
        <p id="timer-label">{ inBreak ? 'Break': 'Session' }</p>
        { inBreak 
            ?
                <p id="time-left">{ displayDigits(Math.floor(breakSeconds/60)) }:{ displayDigits(breakSeconds % 60) }</p>
            :
                <p id="time-left">{ displayDigits(Math.floor(sessionSeconds/60)) }:{ displayDigits(sessionSeconds % 60) }</p>
        }
    </div>
);

export default Display;