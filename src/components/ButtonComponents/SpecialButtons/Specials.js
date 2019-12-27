import React, {useState} from "react";
import {specials} from '../../../data'
import SpecialButton from './SpecialButton.js'

//import any components needed
// const calcSpecials = specials;
//Import your array data to from the provided data file

const Specials = () => {
  // STEP 2 - add the imported data to state
  const [specs] = useState(specials);
  return (
    <div>
      {specs.map((specials, index) => {
        return<SpecialButton key={index} number={specials} />
      })}
    </div>
  );
};


export default specials;

/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/