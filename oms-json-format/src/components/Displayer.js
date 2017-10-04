import React from 'react';

function Displayer({ output, cols }) {
    return (
        <div className="App-main-display">
            <div>Output</div>
            <textarea rows="35" cols={cols} readOnly value={output} />
        </div>
    )
}

export default Displayer;