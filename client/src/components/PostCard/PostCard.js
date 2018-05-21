import React from "react";


const PostCard = () => {

<div class="card">
    <div class="card-image waves-effect waves-block waves-light">
      <img class="activator" src={ props.image }/>
    </div>
    <div class="card-content">
      <span class="card-title activator grey-text text-darken-4">Card Title<i class="material-icons right">more_vert</i></span>
      <p><a href="#">This is a link</a></p>
    </div>
    <div class="card-reveal">
      <span class="card-title grey-text text-darken-4">{ props.title }<i class="material-icons right">close</i></span>
      <p>{ props.message }</p>
    </div>
  </div>
}

// Make a placeholder background.  Make a 