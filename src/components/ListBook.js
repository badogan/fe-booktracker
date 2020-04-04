import React from "react";

const ListBook = props => {
    const {coverURL,title} = props.book
  return (
    <div className="book-div">
      <img
        className="book-cover"
        onClick={()=>props.handleShowBook(props.book)}
        src={coverURL}
        alt={title}
      ></img>
      <h4>{title}</h4>
    </div>
  );
};

export default ListBook;
