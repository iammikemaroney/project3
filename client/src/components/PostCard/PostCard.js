import React from "react";


const PostCard = props => (

  <div className="card">
    <div className="card-image waves-effect waves-block waves-light">
      <div className="medias">
      </div>
      <img className="activator" src="c9-square.png" alt= {props.key}/>
    </div>
    <div className="card-content">
      <span className="card-title activator grey-text text-darken-4">Card Title<i className="material-icons right">more_vert</i></span>

    </div>
    <div className="card-reveal">
      <span className="card-title grey-text text-darken-4"><i className="material-icons right">close</i></span>
      <p>{ props.caption }</p>
    </div>
  </div>
);


export default PostCard;
//<p><a href="#">This is a link</a></p>
// If 