import React, { Component } from "react";

class Entry extends Component {
    state = {
      caption: "",
      image: "",
      video: "",
    };

    handleInputChange = event => {
      const {name, value} = event.target;
      this.setState({[name]: value});
    };
    handlePost = event => {
      event.preventDefault();
      if (this.state.caption || this.state.image || this.state.video) {
        API.newPost({
          caption: this.state.caption,
          image: this.state.image,
          video: this.state.video
        })
          .then(res => this.loadBooks())
          .catch(err => console.log(err));
      }
    };

    render() {
      return (
            
        <div>
          <div class="row">
            <form class="col s12">
              <div class="row">
                <div class="input-field col s6">
                  <input placeholder="Placeholder" id="first_name" type="text" class="validate"/>
                  <label for="first_name">First Name</label>
                </div>
                <div class="input-field col s6">
                  <input id="last_name" type="text" class="validate"/>
                  <label for="last_name">Last Name</label>
                </div>
              </div>
              <div class="row">
       
              </div>
              <div class="file-field input-field">
                <div class="btn">
                  <span>File</span>
                  <input type="file"/>
                </div>
                <div class="file-path-wrapper">
                  <input class="file-path validate" type="text"/>
                </div>
              </div>
              <a class="btn-floating btn-large waves-effect waves-yellow "><i class="material-icons">add_box</i></a>
            </form>
          </div>
        </div>

      );
    }}

export default Entry;