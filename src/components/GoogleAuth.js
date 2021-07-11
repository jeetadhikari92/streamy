import React, { Component } from 'react';

const OAUTH_KEY = process.env.REACT_APP_OAUTH_KEY;

class GoogleAuth extends Component {

    state = {isSignedIn: null}

    componentDidMount() {
        window.gapi.load('client:auth2', async () => {
            await window.gapi.client.init({
                clientId: OAUTH_KEY,
                scope: 'email'
            })

            this.auth = window.gapi.auth2.getAuthInstance();
            this.onAuthChange()
            this.auth.isSignedIn.listen(this.onAuthChange)
        })
    }

    onAuthChange = () => {
        this.setState({isSignedIn: this.auth.isSignedIn.get()})
    }

    renderAuthButton() {
        if(this.state.isSignedIn === null) {
            return <div>Loading...</div>
        } else if(this.state.isSignedIn) {
            return <div>I am signed in</div>
        } else {
            return <div>I am logged out</div>
        }
    }

    render() {
        return (
            <div>{this.renderAuthButton()}</div>
        )
    }
}

export default GoogleAuth;