import React, { Component } from "react";
import { StyleSheet, Text, TouchableHighlight, View } from "react-native";
import PropTypes from "prop-types";

import colors from "../../styles/colors";

export default class RoundedButton extends Component {
  render() {
    const {
      children,
      color,
      backgroundColor,
      icon,
      handleOnPress
    } = this.props;
    return (
      <TouchableHighlight
        style={[styles.wrapper, { backgroundColor }]}
        onPress={handleOnPress}
      >
        <View style={styles.buttonTextWrapper}>
          {icon}
          <Text style={[styles.buttonText, { color }]}>{children}</Text>
        </View>
      </TouchableHighlight>
    );
  }
}

RoundedButton.propTypes = {
  children: PropTypes.string.isRequired,
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
  icon: PropTypes.object,
  handleOnPress: PropTypes.func.isRequired
};

RoundedButton.defaultProps = {
  color: colors.black,
  backgroundColor: "transparent"
};

const styles = StyleSheet.create({
  wrapper: {
    display: "flex",
    padding: 15,
    borderColor: colors.white,
    borderRadius: 40,
    borderWidth: 1,
    marginBottom: 15,
    alignItems: "center"
  },
  buttonText: {
    fontSize: 16,
    textAlign: "center",
    width: "100%",
    color: colors.white
  },
  buttonTextWrapper: {
    flexDirection: "row",
    justifyContent: "flex-end"
  }
});
