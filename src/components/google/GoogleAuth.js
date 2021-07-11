import React, { Component } from "react";
import GoogleButton from "./GoogleButton";

const OAUTH_KEY = process.env.REACT_APP_OAUTH_KEY;

class GoogleAuth extends Component {
  state = { isSignedIn: null };

  componentDidMount() {
    window.gapi.load("client:auth2", async () => {
      await window.gapi.client.init({
        clientId: OAUTH_KEY,
        scope: "email",
      });

      this.auth = window.gapi.auth2.getAuthInstance();
      this.onAuthChange();
      this.auth.isSignedIn.listen(this.onAuthChange);
    });
  }

  onAuthChange = () => {
    this.setState({ isSignedIn: this.auth.isSignedIn.get() });
  };

  onSignIn = () => {
    this.auth.signIn();
  };

  onSignOut = () => {
    this.auth.signOut();
  };

  renderAuthButton() {
    if (this.state.isSignedIn === null) {
      return <div>Loading...</div>;
    } else if (this.state.isSignedIn) {
      return <GoogleButton label="Sign Out" onClick={this.onSignOut} />;
    } else {
      return (
        <GoogleButton label="Sign In with Google" onClick={this.onSignIn} />
      );
    }
  }

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

export default GoogleAuth;
