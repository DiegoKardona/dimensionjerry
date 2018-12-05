import React, { PureComponent } from "react";

import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  };
}

const styles = theme => ({
  paper: {
    position: "absolute",
    width: "auto",
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4
  }
});

class ModalContainer extends PureComponent {
  state = {
    open: false
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Button
          onClick={this.handleOpen}
          variant={this.props.variant}
          color={this.props.color}
        >
          {this.props.button}
        </Button>
        <Modal open={this.state.open} onClose={this.handleClose}>
          <div style={getModalStyle()} className={classes.paper}>
            {this.props.children}
          </div>
        </Modal>
      </div>
    );
  }
}

ModalContainer.propTypes = {
  classes: PropTypes.object.isRequired,
  button: PropTypes.string.isRequired
};

// We need an intermediary variable for handling the recursive nesting.
export default withStyles(styles)(ModalContainer);
