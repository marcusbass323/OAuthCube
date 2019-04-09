import React, { Component } from 'react';
import InstagramLogin from 'react-instagram-login'

export default class InstagramModal extends Component {
  render() {

    const responseInstagram = (response) => {
      console.log(response);
    }

    return (
      <InstagramLogin
      clientId="2fd64d76252848b2aab5d0c466cf347c"
      buttonText="Login via Instagram"
      autoLoad="true"
      onSuccess={responseInstagram}
      onFailure={responseInstagram}
      
    />
    )
  }
}
