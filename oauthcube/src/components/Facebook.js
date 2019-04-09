
import React, { Component } from "react";
import FacebookLogin from "react-facebook-login";

export default class FacebookModal extends Component {
  state = {
    isLoggedIn: false,
    userID: "",
    name: "",
    email: "",
    picture: "",
  };



  responseFacebook = response => {
    // console.log(response);

    this.setState({
      isLoggedIn: true,
      userID: response.userID,
      name: response.name,
      email: response.email,
      picture: response.picture.data.url
    });
  };

  componentClicked = () => console.log("clicked");

  render() {
    let fbContent;

    if (this.state.isLoggedIn) {
      fbContent = (
          <div>
              <div>
                  <img 
                  src={this.state.picture} 
                  alt={this.state.name} 
                  />
                <div>
                  <p className="ID">
                  <strong>Facebook User ID:</strong> 
                  {this.state.userID}
                  </p>
                </div>               
              </div>
            </div>
      );
    } else {
        
      fbContent = (
        <FacebookLogin
          appId="566781370495932"
          autoLoad={true}
          fields="name,email,picture"
          onClick={this.componentClicked}
          />
      );
    }

    return <div>{fbContent}</div>
    
  }
}