import React, { Component } from "react";
import NewPost from "../PostCard/NewPost";
import DoctorContainer from "../Doctor/DoctorContainer";
import PostCard from "../PostCard/PostCard";
import Login from "../Login";
import SignUp from "../Signup";
import NoMatch from "../NoMatch";


class Home extends Component {
    state = {

    };

    render() {
      return(
        <div>
          <Login/>
          
          <SignUp/>

          <NewPost/>
          <PostCard/>
          <DoctorContainer/>
        </div>
      );
    }
}

export default Home;