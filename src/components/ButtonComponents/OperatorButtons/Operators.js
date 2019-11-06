import React, { useState } from "react";
import { operators } from "../../../data";
import OperatorButton from "./OperatorButton";
//import any components needed

//Import your array data to from the provided data file

const Operators = () => {
  // STEP 2 - add the imported data to state
  const [items] = useState(operators);

  return (
    <div className="operators">
       {items.map((item, index) =>
         (<OperatorButton key={index} operatorData={item.char} />)
       )}
    </div>
  );
};

export default Operators;
