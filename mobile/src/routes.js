import React from "react";
import { createStackNavigator } from "react-navigation";

import LoggedOut from "./screens/LoggedOut";
import Login from "./screens/Login";

export default createStackNavigator(
  {
    Home: LoggedOut,
    Login: Login
  },
  {
    initialRouteName: "Home"
  }
);
