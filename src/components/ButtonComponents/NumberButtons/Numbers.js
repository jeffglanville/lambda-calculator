import React, {useState} from "react";
import {numbers} from '../../../data'
import NumberButton from './NumberButton';



//import any components needed
// example of import from data.js. Note all the ../   This is how we move through folders.
/*
import { numbers } from '../../../data'
*/
//Import your array data to from the provided data file

const Numbers = () => {
	// the body of the component
	const [ nums ] = useState(numbers);
	// STEP 2 - add the imported data to state

	// do not make your hook setup in the return
	return (
		<>
			 {nums.map((number, index) => {
				return <NumberButton key={index} number={number} />;
			})}
		</>
	);
};

export default Numbers;

/*STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
it any props needed by the child component */