import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
// import {Wrapper, Row, Col} from "./BootstrapGrid"
import API from "../utils/API";
import googleImage from "./googleButtons/btn_google_signin_dark_normal_web.png";

const styles = {
  header: {
    color: "white",
    // borderStyle: "solid",
    // borderWidth: "1px",
    textAlign: "center",
    marginLeft: "400px"
  },
  gImg:{
    height: "45px",
    width: "140px"
  },

  email:{
    marginRight: "20px"
  }

  // center: {
  //   textAlign: "center"
  // }
}

class Signup extends Component {
  state = {
    redirectTo:"",
    email: "",
    password: "",
    confirmPassword: ""
  }

  textInput = React.createRef();

  handleInputChange = event => {
    const {name, value} = event.target;
    this.setState({[name]: value})
  };

  handleSignUp = event => {
    event.preventDefault();
    API.signUp({ email: this.state.email, password: this.state.password})
      .then(() => this.setState({
        redirectTo: "/login"
      }))
      .catch(err => console.log("Error exectuing handleSignup: ", err));
  }
  handleLogin = event => {
    event.preventDefault();
    API.login({ email: this.state.email, password: this.state.password})
      .then((res) => {
          console.log("RES", res);
          this.props.setUser(res.data.user)
          this.setState({
            redirectTo: "/"
          });
      })
      .catch(err => console.log("Error executing handleLogin: ", err));
  }

  googleSignUp = event => {
    event.preventDefault();
    API.googleSignup()
      .then(res => {

      })
      .catch(err => console.log("Error executing googleSignUp: " , err));
  }

  componentDidMount(){
    this.textInput.current.focus();
  }

  render(){
    if(this.state.redirectTo){
      return <Redirect to={this.state.redirectTo} />
    }
    return (
      <div style={styles.header}>
        <ul className="center">
          {/* <div className="col 4"> */}
              <li><input style={styles.email} span={2} offset={3} placeholder="Email" ref={this.textInput} name="email" type="text" value={this.state.email} required onChange={this.handleInputChange} /></li>
          {/* </div> */}
          {/* <div className="col 4"> */}
          
              <li><input span={2} offset={3} placeholder="Password" name="password" type="password" value={this.state.password} required onChange={this.handleInputChange} /></li>
          {/* </div> */}
          <li><a className="waves-effect waves-yellow" onClick={this.handleSignUp}>Sign Up</a></li>
          <li><a className="waves-effect waves-light" onClick={this.handleLogin}>Log in</a></li>
 
          <li  ><Link to="/auth/google" target="_self"><img style={styles.gImg} src={googleImage} alt="Sign in with Google" /></Link></li>
          </ul>
        </div>

    )
  }
}

export default Signup;