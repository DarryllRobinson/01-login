import React, { Component } from 'react';
import { Navbar, Button } from 'react-bootstrap';

class Upload extends Component {

  uploadWidget = () => {
    window.cloudinary.openUploadWidget(
      { cloud_name: 'flycrow',
        upload_preset: 'ubx3ytwg',
        tags: ['fcm'],
        sources: ['local', 'url', 'facebook']
      },
      function(error, result) {
          console.log("This is the result of the last upload", result);
      });
  }

  render() {
    const { isAuthenticated } = this.props.auth;

    return (
      <div className="container">
        <h3 className="text-center">Upload your content</h3>
        <hr/>
        <div className="col-sm-12">
          <div className="jumbotron text-center">
            <button onClick={this.uploadWidget} className="btn btn-lg btn-info"> Upload Video</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Upload;
