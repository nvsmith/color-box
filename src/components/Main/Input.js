import React, { useEffect } from "react";

const Input = ({ colorValue, handleColorChange }) => {
    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="colorInput">Type Color Name Here</label>
            <input
                id="colorInput"
                type="text"
                required
                autoFocus
                placeholder="Type Color Name Here"
                // Updates the input field when colorValue changes
                value={colorValue}
                // Sends the updated colorValue to handleColorChange which updates the state
                onChange={(e) => handleColorChange(e.target.value)}
            />
        </form>
    );
};

export default Input;
