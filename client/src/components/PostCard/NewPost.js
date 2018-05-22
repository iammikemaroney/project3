import React from "react";

const NewPost = props => (
  <a onClick={props.createPost}className="btn-floating btn-large waves-effect waves-light red"><i className="material-icons">add</i></a>
);

export default NewPost;