import React from "react";

export default class Header extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="header wrapper">
          <div className="logo">
            <h5>Book_Tracker</h5>
          </div>
            {this.props.user && <button
              className="header-logout-button"
              onClick={() => this.props.handleLogout()}
            >
              Logout
            </button>}
        </div>
      </div>
    );
  }
}
