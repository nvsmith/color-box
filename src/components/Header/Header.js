const Header = () => {
    return (
        <header>
            <h1 id="title">Color Box</h1>
            <p id="description">
                A color swatch app that uses the{" "}
                <a
                    href="https://www.npmjs.com/package/colornames"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    colornames API
                </a>
                .
            </p>
        </header>
    );
};

export default Header;
