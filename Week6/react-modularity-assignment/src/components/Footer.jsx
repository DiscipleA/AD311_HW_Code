function Footer()  {
    return (
        <footer style={{ 
            padding: "12px", 
            marginTop: "30px",
            textAlign: "center",
            color: "#555",
            borderTop: "1px solid #ddd"
        }}>
            <small>© {new Date().getFullYear()} React Modularity Assignment</small>
        </footer>
    );
}

export default Footer;