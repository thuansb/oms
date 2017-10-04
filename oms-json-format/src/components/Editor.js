
import React from 'react';

function Displayer({ isValid, cols, handleInputChange, defaultValue }) {
    const InvalidInputMessage = <span className="App-main-editor--error">(not valid input data)</span>;
    return (
        <div className="App-main-editor">
            <div>Input (editable field) {!isValid && InvalidInputMessage}</div>
            <textarea
                rows="35"
                cols={cols}
                defaultValue={defaultValue}
                onChange={(e) => handleInputChange(e.target.value)} />
        </div>
    )
}

export default Displayer;