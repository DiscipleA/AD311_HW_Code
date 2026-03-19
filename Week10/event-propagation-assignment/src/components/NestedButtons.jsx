import React from "react";
import "./NestedButtons.css";

function NestedButtons() {
  const handleOuterClick = () => {
    console.log("Outer container clicked");
    alert("Outer container clicked");
  };

  const handleInnerClick = (e) => {
    e.stopPropagation();
    console.log("Inner button clicked");
    alert("Inner button clicked");
  };

  return (
    <div 
      className="outer-container"
      onClick={handleOuterClick}
      role="button"
      tabIndex={0}
      aria-label="Outer Container"
    >
      <h3>Outer Container</h3>

      <button className="inner-button" onClick={handleInnerClick}>
        Inner Button
      </button>
    </div>
  );
}

export default NestedButtons;