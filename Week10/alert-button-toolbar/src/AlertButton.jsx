function AlertButton({ message, children }) {
  const handleClick = () => {
    alert(message);
  };

  return (
    <button className="alert-button" onClick={handleClick}>
      {children}
    </button>
  );
}

export default AlertButton;