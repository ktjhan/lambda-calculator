import React, { useState } from "react";
import { calculationState } from "../../../data";

// const STATE_NONE = 0;

const NumberButton = props => {
  const [calculation, setCalculation] = useState(calculationState);

  return (
    <button className="button number" onClick={e => setCalculation({result: props.numberData, state: 0})}>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {props.numberData}
    </button>
  );
};

export default NumberButton;
