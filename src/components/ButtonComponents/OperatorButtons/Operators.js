import React, {useState} from "react";
import {operators} from '../../../data';
import OperatorButton from './OperatorButton';

//import any components needed

const calcOperators = operators;

const Operators = () => {
  const [ ops ] = useState(calcOperators);
  // STEP 2 - add the imported data to state
  return (
    <div>
      {ops.map((char, value) => {
        return <OperatorButton key={value} number={char} />
      })}
    </div>
  );
};

export default Operators;

//Import your array data to from the provided data file

/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/