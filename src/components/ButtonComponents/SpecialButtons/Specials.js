import React, {useState} from "react";
import {specials} from '../../../data'
import SpecialButton from './SpecialButton.js'

const calcSpecials = specials;

//import any components needed
//Import your array data to from the provided data file

const Specials = () => {
  // STEP 2 - add the imported data to state
  const [ special ] = useState(calcSpecials);

  const handleClick = (e) => {
    console.log(e.target.value)
  }

  return (
    <>
      {special.map((number, index) => {
        return<SpecialButton handleClick={handleClick} key={index} name={number} value={number} number={number} />
      })}
    </>
  );
};


export default Specials;

/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/