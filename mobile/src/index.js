import React from "react";
import { StyleSheet, Text, View } from "react-native";

import LoggedOut from "./screens/LoggedOut";
import Login from "./screens/Login";
import Routes from "./routes";

export default class App extends React.Component {
  render() {
    return <Login />;
  }
}
