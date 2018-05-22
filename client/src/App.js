import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import NoMatch from "./components/NoMatch";
import Food from "./components/Pages/Food";
import Home from "./components/Pages/Home";
import API from "./utils/API";

class App extends Component {
  state = {
    loggedIn: false,
    user: null,
    email: "",
    password: "",
  }

  setUser = (user) => {
    console.log("USER", user);
    this.setState({
      user,
      loggedIn: true
    });
  }

  handleLogout = () => {
    API.logout()
      .then(() => {
        this.setState({
          user: null,
          loggedIn: false
        });
      })
      .catch(err => console.log("Error executing handleLogout: ", err));
  }

  componentDidMount() {
    API.getCurrentUser()
      .then(res => {
        this.setState({
          user: res.data.user,
          loggedIn: res.data.user || false
        });
      });
  }

  render() {
    return (
      <Router>
        <div>
      
          <Switch>
            <Route exact path="/" render={() => <Home loggedIn={this.state.loggedIn} user={this.state.user} />} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/login" render={() => <Login setUser={this.setUser} />} />
            <Route component={NoMatch}/>
            <Route exact path="/food" component={Food} />
          </Switch>
        </div>
      </Router>

    );
  }
}

export default App;
