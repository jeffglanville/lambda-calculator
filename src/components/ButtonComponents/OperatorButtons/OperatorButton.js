import React from "react";

const OperatorButton = (props) => {

  return (
    <>
      <button className="opbtn">{props.operator}</button>
    </>
  );
};


export default OperatorButton;

/* Display a button element rendering the data being passed down from the parent container on props */