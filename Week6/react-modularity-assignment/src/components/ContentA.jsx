import { Button } from "./SharedComponents";

export function ContentA() {
    return (
        <section style={{ 
            padding: "16px",
            marginBottom: "16px",
            border: "1px solid #ddd",
            borderRadious: "8px",
            backgroundColor: "#090909" 
        }}>
            <h2>Content A</h2>
            <p>This is some dummy content for Component A.</p>

            <Button
                label="Click A"
                onClick={() => alert("Button in Content A clicked")}
            />
        </section>
    );
}
