import React, {Component} from "react";
import "../../css/style.css";
// import seedAlbum from "./seedAlbumDB";

class Album extends Component {
    state= {
      album: {}
    }
    // componentDidMount() {
    //   seedAlbum[Math.floor(Math.random() * 15) +1]
    //     .then(res => this.setState({ album: res.data }))
    //     .catch(err => console.log(err));
    // }
    
    render(){
      return(
        <div className="row">
          <div className="col s12 m12 l4">
            <div className="icon-block">
              <h1 className="center white-text"><i className="material-icons">music_video</i></h1>
              <h6 className="center">Album of the Week</h6>
              <p className="light">{ this.state.album.name }</p>
              <iframe title="cherry" style={{border: "0", width: "250px", height: "250px"}} src="https://bandcamp.com/EmbeddedPlayer/album=747875505/size=large/bgcol=ffffff/linkcol=0687f5/minimal=true/transparent=true/" seamless><a href="http://knxwledge.bandcamp.com/album/hud-dreems">{ this.state.album.title } by Knxwledge.}</a></iframe>
              <p className="light" align="left">{ this.state.album.description }</p>
              <p className="light"><a href="https://itunes.apple.com/us/album/hud-dreems/980151816">Listen on Apple Music</a>
                <br /><a href="https://open.spotify.com/album/2hnFG95OCnV24yP4UDXlzl">Listen on Spotify</a></p>
            </div>
          </div>
        </div>
      );
    }
}

export default Album;