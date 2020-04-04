import React from "react";
import ListBook from '../components/ListBook'

export default class MainPage extends React.Component {
  componentDidMount() {}
  render() {
    return (
      <React.Fragment>

        <div className="mainpage-container wrapper">
          {console.log("This is main page")}
          <h2>Your Books</h2><br/>
          <div className="mainpage-listbooks-container">
          {this.props.books.map(book=><ListBook key={book._id} book={book} handleShowBook={this.props.handleShowBook}/>)}
          </div>
          <button onClick={() => this.props.history.push("/show")}>
            Take me to Show page!
          </button>
        </div>
      </React.Fragment>
    );
  }
}
