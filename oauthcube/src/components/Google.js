import React, { Component } from 'react'
import GoogleLogin from 'react-google-login';

export default class GoogleModal extends Component {


  render() {
    return (
      <div>
        <GoogleLogin
    clientId="432634226022-37hop4nb2mal0810tile8vmlkf8f1rs3.apps.googleusercontent.com"
    buttonText="Login with Google"
    autoLoad="true"
    cookiePolicy={'single_host_origin'}
  />,
      </div>
    )
  }
}
