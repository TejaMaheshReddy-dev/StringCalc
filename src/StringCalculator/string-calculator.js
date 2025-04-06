import React from "react"
import useStringCalcHook from "./hook";

function StringCalculator() {
  const { calculatedValue, handleOnChange, handleOnClick } = useStringCalcHook();
  return (
    <div className="card">
      <h2>String Calculator</h2>
      <textarea
        type="text"
        className="custom-input"
        placeholder="Enter value ..."
        rows={5}
        onChange={(event) => handleOnChange(event)}
      />
      <button className="custom-btn" onClick={handleOnClick}>
        Calculate
      </button>
      <h3>Calculated Value: {calculatedValue}</h3>
    </div>
  );
}

export default StringCalculator;
