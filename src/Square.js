import colorNames from "colornames";

const Square = ({ colorValue, hexValue, isDarkText }) => {
    const isValidColor = hexValue !== undefined;

    return (
        <section
            className="square"
            style={{
                backgroundColor: isValidColor ? colorValue : "#fff",
                color: isDarkText ? "#000" : "#fff",
            }}
        >
            <p>{colorValue ? colorValue : "🎨"}</p>
            <p>{hexValue ? hexValue : null}</p>
        </section>
    );
};

Square.defaultProps = {
    colorValue: "No Value Given",
};
export default Square;
