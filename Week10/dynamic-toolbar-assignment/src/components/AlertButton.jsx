function AlertButton({ message, children }) {
  function handleClick() {
    alert(message);
  }

  return (
    <button type="button" className="alert-button" onClick={handleClick}>
      {children}
    </button>
  );
}

export default AlertButton;