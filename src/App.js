import React from "react";
import { Route } from "react-router-dom";
import "./App.css";

import API from "../src/APIsHelpers/API";

import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import ShowPage from "./pages/ShowPage";
import Header from "./components/Header";

const defaultState = {
  user: null,
  books: null
};

class App extends React.Component {
  componentDidMount() {}
  componentDidUpdate() {}
  state = {
    ...defaultState
  };

  updateUser = user => {
    this.setState({ user });
    this.getAllBooks(user._id).then(() => this.props.history.push("/main"));
  };

  getAllBooks = id => {
    return new Promise(resolve =>
      API.getAllBooks(id).then(data => {
        if (data.status === "success") {
          this.setState({ books: data.data.data });
          resolve();
        }
      })
    );
  };

  handleLogout = () => {
    localStorage.removeItem('token')
    this.setState({...defaultState})
    this.props.history.push("/")
  }

  render() {
    return (
      <React.Fragment>
        <div className="App">
          <Header user={this.state.user} handleLogout={this.handleLogout} />
          <Route
            exact
            path="/"
            render={routerProps => {
              return <LandingPage {...routerProps} user={this.state.user} />;
            }}
          />
          <Route
            exact
            path="/login"
            render={routerProps => {
              return (
                <LoginPage
                  {...routerProps}
                  user={this.state.user}
                  updateUser={this.updateUser}
                />
              );
            }}
          />
          <Route
            exact
            path="/main"
            render={routerProps => {
              return <MainPage {...routerProps} books={this.state.books}/>;
            }}
          />
          <Route
            exact
            path="/show"
            render={routerProps => {
              return <ShowPage {...routerProps} user={this.state.user} />;
            }}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
