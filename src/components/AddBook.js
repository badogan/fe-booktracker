import React from "react";
import API from "../APIsHelpers/API";

export default class AddBook extends React.Component {
  state = {
    title: null,
    coverURL: null
  };

  handleTitle = e => this.setState({ title: e.target.value });
  handleCoverURL = e => this.setState({ coverURL: e.target.value });
  handleAddBook = e => {
    API.addBook(this.props.user._id,{
      title: this.state.title,
      coverURL: this.state.coverURL
    }).then(data => {
        console.log('new book returned data: ', data)
        if (data.status==='success') {
            this.props.getAllBooks(this.props.user._id)
            this.props.resetAddBookInit()
        }
    });
  };

  render() {
    return (
      <div>
        <input
          onChange={this.handleTitle}
          type="text"
          placeholder="Book title"
        ></input><br/><br/>
        <input
          onChange={this.handleCoverURL}
          type="text"
          placeholder="Cover page URL"
        ></input><br/><br/>
        <button onClick={this.handleAddBook}>Add book</button>
        <br/><br/>
      </div>
    );
  }
}
