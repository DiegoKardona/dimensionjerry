import React, { Component } from "react";
import { render } from "react-dom";
import "./styles.css";

import Firebase from "firebase";

/*Importing custom theme of Material-Ui*/
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

/*Importing components*/
import AppHeader from "./components/header/AppHeader";
import Season from "./components/season/Season";
import Chapter from "./components/season/chapter/Chapter";

class App extends Component {
  render() {
    return (
      <div>
        <MuiThemeProvider theme={theme}>
          <AppHeader />
          <Season>
            <Chapter />
          </Season>
        </MuiThemeProvider>
      </div>
    );
  }
}

const theme = createMuiTheme({
  palette: {
    common: {
      black: "#000",
      white: "rgba(255, 255, 255, 1)"
    },
    background: {
      paper: "#fff",
      default: "#181818"
    },
    primary: {
      light: "#6ec6ff",
      main: "#2196f3",
      dark: "#0069c0",
      contrastText: "#fff"
    },
    secondary: {
      light: "rgba(62, 62, 62, 1)",
      main: "rgba(24, 24, 24, 1)",
      dark: "rgba(0, 0, 0, 1)",
      contrastText: "#fff"
    },
    error: {
      light: "rgba(255, 81, 49, 1)",
      main: "rgba(213, 0, 0, 1)",
      dark: "rgba(155, 0, 0, 1)",
      contrastText: "#fff"
    },
    text: {
      primary: "rgba(0, 0, 0, 0.87)",
      secondary: "rgba(255, 255, 255, 1)",
      disabled: "rgba(0, 0, 0, 0.38)",
      hint: "rgba(0, 0, 0, 0.38)"
    }
  }
});

const firebaseConfig = {
  apiKey: "AIzaSyAn8L7wCKkG9kjjh19VMoyHA0q_Ly_D2AY",
  authDomain: "dimensionjerry.firebaseapp.com",
  databaseURL: "https://dimensionjerry.firebaseio.com",
  projectId: "dimensionjerry",
  storageBucket: "dimensionjerry.appspot.com",
  messagingSenderId: "672921352683"
};

if (!Firebase.apps.length) {
  const firebaseApp = Firebase.initializeApp(firebaseConfig);
  firebaseApp.database();
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
