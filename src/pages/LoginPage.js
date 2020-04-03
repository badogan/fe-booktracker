import React from "react";
import API from "../APIsHelpers/API";

export default class LoginPage extends React.Component {
  state = {
    email: null,
    password: null
  };

  synchEmail = e => this.setState({ email: e.target.value });
  synchPassword = e => this.setState({ password: e.target.value });

  async handlelogin() {
    const result = await API.UserSignIn({
      email: this.state.email,
      password: this.state.password
    });
    if (result.status === "success") {
      console.log(result);
      localStorage.token = result.token;
      this.props.updateUser(result.data.user);
      // this.props.history.push("/main")
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className="loginpage-container wrapper">
          {console.log("This is login page")}
          <div className="loginpage-sub-1">
            <div className="loginpage-welcome">
              <h1>Welcome back!</h1>
            </div>
            <div className="loginpage-form-container">
              <input
                className=""
                onChange={this.synchEmail}
                type="text"
                placeholder="Email..."
              ></input>
              <br />
              <input
                className=""
                onChange={this.synchPassword}
                type="password"
                placeholder="Password..."
              ></input>
              <button
                className="loginpage-button-login"
                onClick={() => this.handlelogin()}
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
