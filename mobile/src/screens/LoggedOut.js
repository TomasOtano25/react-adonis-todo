import React from "react";
import { StyleSheet, Text, View, Images } from "react-native";

import colors from "../styles/colors";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <Text style={styles.title}>Welcome To Do</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "",
    justifyContent: "center"
  },

  title: {
    fontSize: 30,
    marginBottom: 20
  }
});
