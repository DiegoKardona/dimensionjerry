import React, { Component } from "react";

import Firebase from "firebase";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import ModalContainer from "./modal/ModalContainer";
import LoginForm from "../components/loginForm/LoginForm";

const styles = {
  avatar: {
    width: 88,
    height: 88
  }
};

class LoginButton extends Component {
  state = {
    user: null
  };

  componentWillMount() {
    Firebase.auth().onAuthStateChanged(user => {
      this.setState({ user });
    });
  }

  handleAuth = () => {
    const googleProvider = new Firebase.auth.GoogleAuthProvider();

    Firebase.auth()
      .signInWithPopup(googleProvider)
      .then(result => console.log(`${result.user.email} ha iniciado sesión`))
      .catch(error => console.log(`Error ${error.code}: ${error.message}`));
  };

  handleLogout = () => {
    Firebase.auth()
      .signOut()
      .then(result => console.log(`${result.user.email} ha salido`))
      .catch(error => console.log(`Error ${error.code}: ${error.message}`));
  };

  renderLoginButton = () => {
    if (this.state.user) {
      return (
        <div>
          <Grid container justify="space-between" alignItems="center">
            <Button color="inherit" onClick={this.handleLogout}>
              Cerrar sesión
            </Button>
            <Avatar
              alt={this.state.user.displayName}
              src={this.state.user.photoURL}
              className={this.props.avatar}
            />
          </Grid>
        </div>
      );
    } else {
      return (
        <ModalContainer button={"Acceder"} color="inherit">
          <LoginForm googleAuth={this.handleAuth} />
        </ModalContainer>
      );
    }
  };
  render() {
    return <div>{this.renderLoginButton()}</div>;
  }
}

LoginButton.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(LoginButton);
