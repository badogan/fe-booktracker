import React from "react";
import ListBook from "../components/ListBook";
import AddBook from "../components/AddBook";

export default class MainPage extends React.Component {
  componentDidMount() {}

  state = {
    searchFilter: "",
    addBookInit: false
  };

  handleSearchFilter = e => this.setState({ searchFilter: e.target.value });
  resetAddBookInit = () => this.setState({addBookInit:false})

  render() {
    return (
      <React.Fragment>
        <div className="mainpage-container wrapper">
          {console.log("This is main page")}
          <h2>Search Books Based on Who You Lent Them To</h2>
          <input
            onChange={e => this.handleSearchFilter(e)}
            placeholder="Search who lent to?"
          ></input>
          <br/>
          {!this.state.addBookInit && (
            <button onClick={() => this.setState({ addBookInit: true })}>
              Add a new book
            </button>
          )}
          {this.state.addBookInit && (
            <AddBook
              getAllBooks={this.props.getAllBooks}
              user={this.props.user}
              resetAddBookInit={this.resetAddBookInit}
            />
          )}
          <h2>Your Books</h2>
          <br />
          <div className="mainpage-listbooks-container">
            {this.props.books
              .filter(book =>
                this.state.searchFilter === ""
                  ? book
                  : book.lentTo &&
                    book.lentTo.startsWith(this.state.searchFilter)
                  ? book
                  : null
              )
              .map(book => (
                <ListBook
                  key={book._id}
                  book={book}
                  handleShowBook={this.props.handleShowBook}
                />
              ))}
          </div>
        </div>
      </React.Fragment>
    );
  }
}
