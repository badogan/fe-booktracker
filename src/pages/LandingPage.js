import React from "react";

export default class LandingPage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="landingpage-container wrapper">
          {/* {console.log("This is landing page")} */}
          <div className="landingpage-sub-1">
            <div className="landingpage-mainmessage">
              <h1>Keep track of your books_</h1>
              <br />
              <h3>Keep your life under control.</h3>
            </div>
            <div className="landingpage-image-container">
              <img
                className="landingpage-image"
                src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                alt="books!"
              ></img>
            </div>
          </div>

          <div className="landingpage-buttons">
            <button
              className="landingpage-button-login"
              onClick={() => this.props.history.push("/login")}
            >
              Login
            </button>
            <button
              className="landingpage-button-login"
              onClick={() => this.props.history.push("/login")}
            >
              Signup
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
