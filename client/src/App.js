import React, { Component } from 'react';
import './App.css';
import recipes from "../src/components/Scrape/recipes.json";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Signup, Login, NoMatch, Scrape } from "./components";
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
    })
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
      })
    })
  }

  render() {
    return (
      <Router>
        <div>
          <Navbar loggedIn={this.state.loggedIn} logout={this.handleLogout}/>
          <Switch>
            <Route exact path="/" render={() => <Home loggedIn={this.state.loggedIn} user={this.state.user}/>} />
            <Route exact path="/signup" component={SignupForm} />
            <Route exact path="/login" render={() => <Login setUser={this.setUser} />} />
            <Route component={NoMatch}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;



//   render() {
//     return (

//       <div className="App">

//       {recipes.map((recipe, i) => (
//         <Scrape
//           key={i}
//           title= {recipe.title}
//           image= {recipe.image}
//           link= {recipe.link}
//           children= "View Recipe"
          
//         />
//         )
//   )};
//         </div>
//   )
//   }
// }

// export default App;
