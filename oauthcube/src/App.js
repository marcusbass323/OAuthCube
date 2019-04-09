import React, { Component } from 'react';
import Cube from "react-3d-cube";
import Modal from 'react-modal';
import './App.css';
import FacebookModal from './components/Facebook';
import GoogleModal from './components/Google';
import InstagramModal from './components/Instagram';
import TwitterModal from './components/Twitter';
import GithubModal from './components/Github';
import LinkedInModal from './components/Linkedin';


export default class App extends Component {

  constructor() {
    super();
 
    this.state = {
      FacebookmodalIsOpen: false,
      GooglemodalIsOpen: false,
      InstagrammodalIsOpen: false,
      TwittermodalIsOpen: false,
      GithubmodalIsOpen: false,
      LinkedinmodalIsOpen: false,
    };
 
    this.FacebookopenModal = this.FacebookopenModal.bind(this);
    this.FacebookcloseModal = this.FacebookcloseModal.bind(this);

    this.GoogleopenModal = this.GoogleopenModal.bind(this);
    this.GooglecloseModal = this.GooglecloseModal.bind(this);

    this.InstagramopenModal = this.InstagramopenModal.bind(this);
    this.InstagramcloseModal = this.InstagramcloseModal.bind(this);
    
    this.TwitteropenModal = this.TwitteropenModal.bind(this);
    this.TwittercloseModal = this.TwittercloseModal.bind(this);

    this.GithubopenModal = this.GithubopenModal.bind(this);
    this.GithubcloseModal = this.GithubcloseModal.bind(this);

    this.LinkedinopenModal = this.LinkedinopenModal.bind(this);
    this.LinkedincloseModal = this.LinkedincloseModal.bind(this);
  }
 
  FacebookopenModal() {
    this.setState({FacebookmodalIsOpen: true});
  }

  FacebookcloseModal() {
    this.setState({FacebookmodalIsOpen: false});
  }

  GoogleopenModal() {
    this.setState({GooglemodalIsOpen: true});
  }

  GooglecloseModal() {
    this.setState({GooglemodalIsOpen: false});
  }

  InstagramopenModal() {
    this.setState({InstagrammodalIsOpen: true});
  }

  InstagramcloseModal() {
    this.setState({InstagrammodalIsOpen: false});
  }

  TwitteropenModal() {
    this.setState({TwittermodalIsOpen: true});
  }

  TwittercloseModal() {
    this.setState({TwittermodalIsOpen: false});
  }

  GithubopenModal() {
    this.setState({GithubmodalIsOpen: true});
  }

  GithubcloseModal() {
    this.setState({GithubmodalIsOpen: false});
  }

  LinkedinopenModal() {
    this.setState({LinkedinmodalIsOpen: true});
  }

  LinkedincloseModal() {
    this.setState({LinkedinmodalIsOpen: false});
  }


  render() {

    const customStyles = {
      content : {
        top: '50%',
        left: '50%',
        right: '50%',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
      }
}


    return (
      <div className="App">
      <div>
        <Modal
          isOpen={this.state.FacebookmodalIsOpen}
          onRequestClose={this.FacebookcloseModal}
          style={customStyles}>
          <button onClick={this.FacebookcloseModal}>close</button>
          <div><FacebookModal/></div>
        </Modal>

        <Modal
          isOpen={this.state.GooglemodalIsOpen}
          onRequestClose={this.GooglecloseModal}
          style={customStyles}>
          <button onClick={this.GooglecloseModal}>close</button>
          <GoogleModal />
        </Modal>

        <Modal
          isOpen={this.state.InstagrammodalIsOpen}
          onRequestClose={this.InstagramcloseModal}
          style={customStyles}>
          <button onClick={this.InstagramcloseModal}>close</button>
          <InstagramModal />
        </Modal>

        <Modal
          isOpen={this.state.TwittermodalIsOpen}
          onRequestClose={this.TwittercloseModal}
          style={customStyles}>
          <button onClick={this.TwittercloseModal}>close</button>
          <TwitterModal />
        </Modal>

        <Modal
          isOpen={this.state.GithubmodalIsOpen}
          onRequestClose={this.GithubcloseModal}
          style={customStyles}>
          <button onClick={this.GithubcloseModal}>close</button>
          <GithubModal />
        </Modal>

        <Modal
          isOpen={this.state.LinkedinmodalIsOpen}
          onRequestClose={this.LinkedincloseModal}
          style={customStyles}>
          <button onClick={this.LinkedincloseModal}>close</button>
          <LinkedInModal />
        </Modal>
      </div>

      <h1>OAuth Cube</h1>
      <div
        style={{
          width: 300,
          height: 300,
        }}>      
        <Cube size={300} index="front">
        <div>        
          <img
            onClick={this.FacebookopenModal}
            src={"https://cdn.techgyd.com/50-Best-Facebook-Logo-Icons-GIF-Transparent-PNG-Images-87.gif"}
            alt="front"
          />
          </div>

          <img
            onClick={this.GoogleopenModal}
            src={"https://blog.hubspot.com/hubfs/image8-2.jpg"}
            alt="Google"
          />
          <img
            onClick={this.InstagramopenModal}
            src={"https://cdn.pixabay.com/photo/2016/08/09/17/52/instagram-1581266_960_720.jpg"}
            alt="Instagram"
          />
          <img
            onClick={this.TwitteropenModal}
            src={"https://www.saydaily.com/.image/t_share/MTM0ODg3OTkwOTMyNTc1NTA2/screen-shot-2015-12-03-at-22820-pmpng.png"}
            alt="Twitter"
          />
          <img
            onClick={this.LinkedinopenModal}
            src={"http://glazerpromos.com/wp-content/uploads/2017/07/linkedin-logo-1024x1024.png"}
            alt="Linkedin"
          />
          <img
            onClick={this.GithubopenModal}
            src={"https://d1qb2nb5cznatu.cloudfront.net/startups/i/60436-22967c4ce89dbdbd4a8d49b090509a78-medium_jpg.jpg?buster=1517982458"}
            alt="Github"
          />
        </Cube>
      </div>
    </div>
    );
  } 
};