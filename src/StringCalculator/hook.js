import { useState } from "react";

function useStringCalcHook() {
  const [stringValue, setStringValue] = useState("");
  const [calculatedValue, setCalculatedValue] = useState(0);
  const [error, setError] = useState("");

  //handles the button click//
  const handleOnClick = () => {
    if (!stringValue) {
      setCalculatedValue(0);
      return;
    }
    //below is to find negative numbers//
    const numbers = stringValue.match(/-?\d+/g)?.map(Number) || [];
    const negativeNumbers = numbers.filter((num) => num < 0);
    //check if there are any -ve numbers//
    if (negativeNumbers.length > 0) {
      setError(`Negative numbers not allowed: ${negativeNumbers.join(", ")}`);
      return;
    }
    //If no -ve numbers add the numbers//
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    setCalculatedValue(sum);
  };

  //handles the input changes//
  const handleOnChange = (event) => {
    const stringValue = event.target.value;
    setStringValue(stringValue);
    setCalculatedValue(0);
    setError("");
  };
  return {
    error,
    calculatedValue,
    handleOnClick,
    handleOnChange,
  };
}

export default useStringCalcHook;
