import React, { Component } from 'react';
import axios from 'axios';
import { CloudinaryContext, Transformation, Video } from 'cloudinary-react';

class Home extends Component {
  login() {
    this.props.auth.login();
  }

  state = { videos: [] };

  getVideos() {
    axios.get('https://res.cloudinary.com/flycrow/video/list/fcm.json')
          .then(res => {
            //console.log(res.data.resources);
            this.setState({ videos: res.data.resources});
    });
  }

  componentDidMount() {
    this.getVideos();
  }

  render() {
    const { isAuthenticated } = this.props.auth;
    const { videos } = this.state;

    return (
      <div className="container">
        <h3 className="text-center"> Content Library </h3>
        <hr/>
        <div className="col-sm-12">
          <CloudinaryContext cloudName="flycrow">
            { videos.map((data, index) => (
                <div className="col-sm-4" key={index}>
                  <div className="embed-responsive embed-responsive-4by3">
                    <Video publicId={data.public_id} width="300" height="300" controls></Video>
                  </div>
                  <div> Created at {data.created_at} </div>

                </div>
              ))
            }
          </CloudinaryContext>
        </div>

      </div>
    );
  }
}

export default Home;
