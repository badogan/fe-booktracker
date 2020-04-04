import React from "react";
import API from "../APIsHelpers/API";

const ReturnBook = props => {
  const handleReturnBook = () => {
    API.patchBook(props.user._id, props.book._id, {
      lentTo: null
    }).then(data => {
      console.log('returned data NOW IS: ',data)
      if (data.status === 200) {
        props.updateUser(props.user)
      }
    });
  };

  return (
    <button onClick={()=>handleReturnBook()}>
      {props.book.lentTo} returned the book!
    </button>
  );
};

export default ReturnBook;
