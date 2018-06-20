import React from "react";
import { Text, StyleSheet, View } from "react-native";
import PropTypes from "prop-types";
import Icon from "react-native-vector-icons/FontAwesome";

import colors from "../styles/colors";

export default class Login extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.loginWrapper}>
          <Text>asdf</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary
  },
  loginWrapper: {}
});
