import React, { useState } from "react";
import { specials } from "../../../data";
import SpecialButton from "./SpecialButton";
//import any components needed

//Import your array data to from the provided data file

const Specials = () => {
  // STEP 2 - add the imported data to state

  const [items] = useState(specials);

  return (
    <div className="specials">
       {items.map((item, index) =>
         (<SpecialButton key={index} specialData={item} />)
       )}
    </div>
  );
};

export default Specials;
