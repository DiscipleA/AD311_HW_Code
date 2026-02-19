// Default exports
export { default as Header } from "./Header";
export { default as Footer } from "./Footer";

// Named exports
export { ContentA } from "./ContentA";
export { ContentB } from "./ContentB";

// New Button component (named export)
export function Button({ label = "Click Me", onClick = () => {} }) {
    return (
        <button
            onClick={onClick}
            style={{
                padding: "10px 16px",
                backgroundColor: "#007bff",
                color: "#fff",
                border: "none",
                borderRadious: "8px",
                cursor: "pointer",
                marginTop: "10px",
                transition: "0.2s ease"
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = "#0056b3"}
            onMouseOut={(e) => e.target.style.backgroundColor = "#007bff"}
        >
            {label}
        </button>    
    );
}