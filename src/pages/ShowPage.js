import React from "react";
import LendBook from "../components/LendBook";
import ReturnBook from "../components/ReturnBook";
import API from "../APIsHelpers/API";

export default class ShowPage extends React.Component {

  deleteBook = () => {
    API.deleteBook(this.props.user._id, this.props.book._id).then(data =>{
      if (data.status===204) {
        this.props.updateUser(this.props.user)
      }
    })
  }

  render() {
    const { coverURL, title, _id } = this.props.book;

    return (
      <div className="showpage-container wrapper">
        {/* {console.log("This is Show page")} */}
        <img className="book-cover" src={coverURL} alt={title}></img>
        {this.props.book.lentTo ? (
          <h2>Lent to: {this.props.book.lentTo}</h2>
        ) : null}
        <h4>{title}</h4>
        <h3>{_id}</h3>
          <br/>
        {this.props.book.lentTo ? (
          <ReturnBook
            user={this.props.user}
            book={this.props.book}
            updateUser={this.props.updateUser}
          />
        ) : (
          <LendBook
            user={this.props.user}
            book={this.props.book}
            updateUser={this.props.updateUser}
          />
        )}
        <br/>
        <button onClick={() => this.deleteBook()}>
          Remove book from library!
        </button>
        <br/>
        <button onClick={() => this.props.history.push("/main")}>
          Go to Main
        </button>
      </div>
    );
  }
}
