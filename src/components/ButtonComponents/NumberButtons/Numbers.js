import React, { useState } from "react";
import { numbers } from "../../../data";
import NumberButton from "./NumberButton";

//import any components needed
// example of import from data.js. Note all the ../   This is how we move through folders.
/*
import { numbers } from '../../../data'
*/
//Import your array data to from the provided data file

const Numbers = () => {
  // STEP 2 - add the imported data to state
  const [items] = useState(numbers);

  return (
    <div className="numbers">
       {items.map((item, index) =>
         (<NumberButton key={index} numberData={item} />)
       )}
    </div>
  );
};

export default Numbers;
