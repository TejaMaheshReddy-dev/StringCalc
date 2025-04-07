import React from "react";
import useStringCalcHook from "./hook";
import "./string-calculator.css";

function StringCalculator() {
  const { error, calculatedValue, handleOnChange, handleOnClick } =
    useStringCalcHook();
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
      {error === "" ? (
        <h3>Calculated Value: {calculatedValue}</h3>
      ) : (
        <h3 className="error">{error}</h3>
      )}
    </div>
  );
}

export default StringCalculator;
