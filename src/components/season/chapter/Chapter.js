import React from "react";

import "./Chapter.css";

import PropTypes from "prop-types";

import ModalContainer from "../../../containers/modal/ModalContainer";
import VideoPlayer from "../../videoPlayer/VideoPlayer";

import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const styles = {
  card: {
    maxWidth: 345,
    margin: 8,
    backgroundColor: "inherit"
  },
  media: {
    height: 180
  },
  title: {
    color: "white"
  },
  info: {
    color: "#b3b3b3"
  }
};

function Chapter(props) {
  const { classes } = props;
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.cover}
          title={props.title}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h6"
            component="h4"
            className={classes.title}
          >
            {props.id}. {props.title}
          </Typography>
          <Typography component="p" className={classes.info}>
            {props.info}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <ModalContainer button={"Ver capítulo"} color={"primary"}>
          <Typography gutterBottom variant="h5" component="h4" align="center">
            Capítulo {props.id}. {props.title}
          </Typography>
          <VideoPlayer {...props} />
        </ModalContainer>
      </CardActions>
    </Card>
  );
}

Chapter.propTypes = {
  classes: PropTypes.object.isRequired,
  cover: PropTypes.string,
  title: PropTypes.string,
  id: PropTypes.number,
  info: PropTypes.string
};

export default withStyles(styles)(Chapter);
