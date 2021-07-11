import React, { Component } from "react";
import { connect } from 'react-redux';
import { signIn, signOut } from '../../actions'
import GoogleButton from "./GoogleButton";

const OAUTH_KEY = process.env.REACT_APP_OAUTH_KEY;

class GoogleAuth extends Component {

  componentDidMount() {
    window.gapi.load("client:auth2", async () => {
      await window.gapi.client.init({
        clientId: OAUTH_KEY,
        scope: "email",
      });

      this.auth = window.gapi.auth2.getAuthInstance();
      this.onAuthChange(this.auth.isSignedIn.get());
      this.auth.isSignedIn.listen(this.onAuthChange);
    });
  }

  onAuthChange = (isSignedIn) => {
    if (isSignedIn) {
      const currentUser = this.auth.currentUser.get().getBasicProfile();
      const user = {
        id: currentUser.getId(),
        email: currentUser.getEmail(),
        name: currentUser.getName()
      }
      this.props.signIn(user);
    } else {
      this.props.signOut();
    }
  };

  onSignInClick = () => {
    this.auth.signIn();
  };

  onSignOutClick = () => {
    this.auth.signOut();
  };

  renderAuthButton() {
    if (this.props.isSignedIn) {
      return <GoogleButton label="Sign Out" onClick={this.onSignOutClick} />;
    } else {
      return (
        <GoogleButton label="Sign In with Google" onClick={this.onSignInClick} />
      );
    }
  }

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn }
}

export default connect(mapStateToProps, { signOut, signIn })(GoogleAuth);
