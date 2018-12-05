import React from "react";
import "./AppHeader.css";

import LoginButton from "../../containers/LoginButton";

import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const styles = {
  root: {
    flexGrow: 1
  },
  appBar: {
    background: "black"
  },
  grow: {
    flexGrow: 1
  }
};

function AppHeader(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Typography
            variant="h6"
            component="h1"
            color="inherit"
            className={classes.grow}
          >
            Dimensión Jerry
          </Typography>
          <LoginButton />
        </Toolbar>
      </AppBar>
      <div>
        <div className="banner">
          <div className="banner-vignette" />
        </div>
      </div>
    </div>
  );
}

AppHeader.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AppHeader);
