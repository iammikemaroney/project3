import React, { Component } from "react";
import NewPost from "../PostCard/NewPost";
import DoctorContainer from "../Doctor/DoctorContainer";
import PostCard from "../PostCard/PostCard";


class Home extends Component {
    state = {

    };

    render() {
      return(
        <div>
          <NewPost/>
          <PostCard/>
          <DoctorContainer/>
        </div>
      );
    }
}

export default Home;