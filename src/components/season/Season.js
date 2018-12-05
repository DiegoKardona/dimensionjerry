import React from "react";

import "./Season.css";

import data from "../../database.json";
import PropTypes from "prop-types";

import Chapter from "./chapter/Chapter";

import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    width: "100%",
    flexGrow: 1,
    padding: 20,
    position: "absolute",
    top: "60vh"
  },
  panel: {
    background: "black"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
    color: "white"
  }
});

function Season(props) {
  const { classes } = props;
  const season = data.seasons;

  return (
    <div className={classes.root}>
      <ExpansionPanel defaultExpanded className={classes.panel}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>{season[0].title}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Grid container className="seasonContainer">
            <Grid item lg={3} md={4} sm={6} xs={12} className="seasonItem">
              {season[0].chapters.map(chapter => {
                return <Chapter {...chapter} key={chapter.id} />;
              })}
            </Grid>
          </Grid>
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <ExpansionPanel className={classes.panel}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>{season[1].title}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Grid container className="seasonContainer">
            <Grid item lg={3} md={4} sm={6} xs={12} className="seasonItem">
              {season[1].chapters.map(chapter => {
                return <Chapter {...chapter} key={chapter.id} />;
              })}
            </Grid>
          </Grid>
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <ExpansionPanel className={classes.panel}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>{season[2].title}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Grid container className="seasonContainer">
            <Grid item lg={3} md={4} sm={6} xs={12} className="seasonItem">
              {season[2].chapters.map(chapter => {
                return <Chapter {...chapter} key={chapter.id} />;
              })}
            </Grid>
          </Grid>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}

Season.PropTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Season);
