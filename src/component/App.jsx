import React, { Component } from 'react';
import { Signin } from './Signin';
import { Upload } from './Upload';
import { Header } from './Header';
import { Footer } from './Footer';
import { ThemeProvider, theme, CSSReset, ToastProvider } from '@blockstack/ui';
import { UserSession } from 'blockstack';
import { appConfig } from '../assets/constants';
import { Connect } from '@blockstack/connect';

const userSession = new UserSession({ appConfig });

export default class App extends Component {
  state = {
    userData: null,
  };

  handleSignOut(e) {
    e.preventDefault();
    this.setState({ userData: null });
    userSession.signUserOut(window.location.origin);
  }

  render() {
    const { userData } = this.state;
    const authOptions = {
      appDetails: {
        name: "Paradigm",
        icon: window.location.origin + '/logo.svg',
      },
      userSession,
      finished: ({ userSession }) => {
        this.setState({ userData: userSession.loadUserData() });
      },
    };
    return (
      <Connect authOptions={authOptions}>
        <ThemeProvider theme={theme}>
          <ToastProvider>
            <div className="site-wrapper">
              <div className="site-wrapper-inner" style={{ position: "relative", background: "#ecf0f1", paddingBottom:"160px", minHeight: "100vh" }}>
                <Header />
                {!userData && !document.location.pathname.includes('todos/') ? (
                  <Signin />
                ) : (
                  <Upload />
                )}
                <Footer />
              </div>
            </div>
          </ToastProvider>
          <CSSReset />
        </ThemeProvider>
      </Connect>
    );
  }

  componentDidMount() {
    if (userSession.isSignInPending()) {
      userSession.handlePendingSignIn().then(userData => {
        window.history.replaceState({}, document.title, '/');
        this.setState({ userData: userData });
      });
    } else if (userSession.isUserSignedIn()) {
      this.setState({ userData: userSession.loadUserData() });
    }
  }
}
