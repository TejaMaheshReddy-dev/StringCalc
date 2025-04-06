import { useState } from "react";

function useStringCalcHook() {
  const [stringValue, setStringValue] = useState("");
  const [calculatedValue, setCalculatedValue] = useState(0);
  const [error, setError] = useState("");
  const handleOnClick = () => {
    if (!stringValue) {
      setCalculatedValue(0);
      return;
    }
    const numbers = stringValue.match(/-?\d+/g)?.map(Number) || [];
    const negativeNumbers = numbers.filter((num) => num < 0);
    if (negativeNumbers.length > 0) {
      setError(`Negative numbers not allowed: ${negativeNumbers.join(", ")}`);
      return;
    }
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    setCalculatedValue(sum);
  };
  const handleOnChange = (event) => {
    const stringValue = event.target.value;
    setStringValue(stringValue);
    setCalculatedValue(0);
    setError("")
  };
  return {
    error,
    calculatedValue,
    handleOnClick,
    handleOnChange,
  };
}

export default useStringCalcHook;
