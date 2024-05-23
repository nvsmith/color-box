import { FaSun, FaMoon } from "react-icons/fa";

const Square = ({ colorValue, hexValue }) => {
    // Checks that hexValue is not undefined
    const isValidColor = hexValue !== undefined;

    return (
        <section className="display-container">
            <div
                className="square"
                style={isValidColor ? { background: hexValue } : {}}
            >
                <p>{colorValue ? colorValue : <FaSun className="icon" />}</p>
                <p>{hexValue ? hexValue : null}</p>
            </div>

            <div
                className="square--dark"
                style={isValidColor ? { background: hexValue } : {}}
            >
                <p>{colorValue ? colorValue : <FaMoon className="icon" />}</p>
                <p>{hexValue ? hexValue : null}</p>
            </div>
        </section>
    );
};

Square.defaultProps = {
    colorValue: "No Value Given",
};
export default Square;
