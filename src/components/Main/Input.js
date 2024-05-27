import colornames from "colornames";

const Input = ({
    colorValue,
    setColorValue,
    setHexValue,
    selectedColorName,
}) => {
    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="">Type Color Name Here</label>
            <input
                type="text"
                required
                autoFocus
                placeholder="Type Color Name Here"
                value={colorValue || selectedColorName}
                onChange={(e) => {
                    const inputColor = e.target.value.toLowerCase(); // Convert to lowercase for consistent lookup
                    setColorValue(inputColor);
                    // Gets HEX code for a name from colornames API.
                    const colorHex = colornames(inputColor);
                    setHexValue(colorHex);
                }}
            />
        </form>
    );
};

export default Input;
