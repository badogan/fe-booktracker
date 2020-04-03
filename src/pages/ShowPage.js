import React from "react";

export default class ShowPage extends React.Component {
  render() {
    return (
      <div className="loginpage-container wrapper">
        {console.log("This is Show page")}
        <h1>This is Show page</h1>
        <button onClick={() => this.props.history.push("/main")}>
          Take me to Main page!
        </button>
      </div>
    );
  }
}
