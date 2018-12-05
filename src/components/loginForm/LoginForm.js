import React from "react";

import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  input: {
    display: "none"
  }
});

function LoginForm(props) {
  const { classes } = props;
  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        fullWidth="true"
        disabled
      >
        Logearse con Facebook
      </Button>
      <Button
        variant="contained"
        color="primary"
        style={{ backgroundColor: "#EA4335" }}
        className={classes.button}
        fullWidth="true"
        onClick={props.googleAuth}
      >
        Logearse con Google
      </Button>
    </div>
  );
}

LoginForm.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(LoginForm);
