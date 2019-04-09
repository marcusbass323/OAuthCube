import React, { Component } from 'react'
import TwitterLogin from 'react-twitter-auth';

export default class TwitterModal extends Component {
  render() {
    return (
<TwitterLogin
  // loginUrl="http://localhost:3000/api/v1/auth/twitter"
  // onFailure={this.onFailed}
  // onSuccess={this.onSuccess}
  forceLogin={true}
  // requestTokenUrl="http://localhost:3000/api/v1/auth/twitter/reverse"
  showIcon={true}
/>
    )
  }
}
