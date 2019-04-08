import React, { Component } from 'react';
import Cube from "react-3d-cube";
import FacebookLogin from "react-facebook-login";
import FacebookModal from './components/Facebook';
import './App.css';

export default class App extends Component {

  state = {
    Facebookshow: false,
  };

  showFacebookModal = () => {
    this.setState({
      Facebookshow: true,
    });
  };

  hideModal = () => {
    this.setState({
      Facebookshow: false    
    });
  };


  render() {

    return (
      <div className="App">
            <FacebookModal Facebookshow={this.state.Facebookshow} handleClose={this.hideModal}/>

      <h1>OAuth Cube</h1>
      <div
        style={{
          width: 300,
          height: 300,
        }}
      >
        <Cube size={300} index="front">
        <div>        
          <img
          onClick={this.showFacebook}          
            src={
              "https://cdn.techgyd.com/50-Best-Facebook-Logo-Icons-GIF-Transparent-PNG-Images-87.gif"
            }
            alt="front"
          />
          </div>

          <img
            src={"https://blog.hubspot.com/hubfs/image8-2.jpg"}
            alt="front"
          />
          <img
            src={
              "https://amp.businessinsider.com/images/58c1a8cb6e200469108b4fae-750-563.jpg"
            }
            alt="front"
          />
          <img
            src={
              "data:image/png;base64,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"
            }
            alt="front"
          />
          <img
            src={
              "http://glazerpromos.com/wp-content/uploads/2017/07/linkedin-logo-1024x1024.png"
            }
            alt="front"
          />
          <img
            src={
              "https://d1qb2nb5cznatu.cloudfront.net/startups/i/60436-22967c4ce89dbdbd4a8d49b090509a78-medium_jpg.jpg?buster=1517982458"
            }
            alt="front"
          />
        </Cube>
      </div>
    </div>
    );
  } 
};