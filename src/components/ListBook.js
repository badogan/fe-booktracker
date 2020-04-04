import React from "react";

const ListBook = props => {
  const { coverURL, title, lentTo } = props.book;
  return (
    <div className="book-div">
      <img
        className="book-cover"
        onClick={() => props.handleShowBook(props.book)}
        src={coverURL}
        alt={title}
      ></img>
      <h3 className='book-div-title'>{title}</h3>
      {lentTo && <h3 className='book-div-lentTo'>Lent To: {lentTo}</h3>}
    </div>
  );
};

export default ListBook;
