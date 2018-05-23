import React, { Component } from "react";
import NewPost from "../PostCard/NewPost";
import DoctorContainer from "../Doctor/DoctorContainer";
import PostCard from "../PostCard/PostCard";
// import Login from "../Login";
// import SignUp from "../Signup";
// import NoMatch from "../NoMatch";
// import Navbar2 from "../Navbar2";
// import Jumbotron from "../Jumbotron";
import Footer from "../Footer";
import WeeklyContainer from "../Weekly/WeeklyContainer";


class Home extends Component {
    state = {

    };

    render() {
      return(
        <div>

          <NewPost/>
          <PostCard/>
          <WeeklyContainer/>
          <DoctorContainer/>
          <Footer/>
        </div>
      );
    }
}

export default Home;