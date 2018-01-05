import React, { Component } from 'react';
import injectSheet from 'react-jss';

import coupleFlower from '../images/photos_selected/Login-Page/couple-flower-copy.jpg';

class LoginPage extends Component {
  state = {
    username: '',
    password: '',
  };

  onSubmitForm = e => {
    e.preventDefault();
  };

  redirectToForgotPassword = () => {
    const { history } = this.props;

    history.push('/forgetPassword');
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.container}>
        <div className={classes.darkBox}>
          <form onSubmit={this.onSubmitForm}>
            <input
              type="text"
              onChange={e => this.setState({ username: e.target.value })}
              placeholder="Username"
            />
            <input
              type="password"
              onChange={e => this.setState({ password: e.target.value })}
              placeholder="Password"
            />
            <input
              type="submit"
              value="LOGIN"
              className={classes.submitButton}
            />
            <button
              className={classes.forgotPassword}
              onClick={this.redirectToForgotPassword}
            >
              Forgot your password ?
            </button>
          </form>
        </div>
      </div>
    );
  }
}

const styles = {
  '@global': {
    form: {
      display: 'flex',
      flexDirection: 'column',
      paddingTop: '100px',
      '& > input': {
        padding: '10px',
        margin: '15px 60px',
        outline: 'none',
        border: 'none',
        textAlign: 'center',
        fontSize: '12px',
      },
    },
  },
  container: {
    backgroundImage: `url(${coupleFlower})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: 'calc(100vh - 161px)',
    backgroundPosition: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  darkBox: {
    background: 'rgba(0, 0, 0, 0.2)',
    height: '400px',
    width: '400px',
  },
  forgotPassword: {
    background: '#E7E7E7',
    padding: '10px',
    margin: '15px 60px',
    outline: 'none',
    fontSize: '12px',
  },
  submitButton: {
    margin: '15px 60px',
    background: '#F9526A',
    color: 'white',
    fontSize: '12px',
    '&:hover': {
      cursor: 'pointer',
    },
  },
};

export default injectSheet(styles)(LoginPage);
