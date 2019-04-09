import React, { Component } from 'react'
import GitHubLogin from 'react-github-login';

export default class GithubModal extends Component {
  render() {
    return (
      <div>
        <GitHubLogin 
        clientId="fc3eccaea64215a22f2b"
        autoLoad="true"
        />
      </div>
    )
  }
}
