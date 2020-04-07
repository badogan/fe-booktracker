import React from "react";

const ListErrrors = props => {
    const {errorArray} = props
  return (
    <React.Fragment>
      {errorArray.map((error, index) => (
        <h5 key={index}>{error}</h5>
      ))}
    </React.Fragment>
  );
};

export default ListErrrors;