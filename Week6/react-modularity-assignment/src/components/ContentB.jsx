import { Button } from "./SharedComponents";

export function ContentB() {
    return (
        <section style={{ 
            padding: "16px",
            marginBottom: "16px",
            border: "1px solid #ddd",
            borderRadious: "8px",
            backgroundColor: "#010101" 
        }}>
            <h2>Content B</h2>
            <p>This is some dummy content for Component B.</p>

            <Button
                label="Click B"
                onClick={() => alert("Button in Content B clicked")}
            />
        </section>
    );
}
