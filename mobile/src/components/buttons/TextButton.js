import React, { Component } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import PropTypes from "prop-types";

import colors from "../../styles/colors";

export default class TextButton extends Component {
  render() {
    const { children, color, handleOnPress } = this.props;
    return (
      <TouchableOpacity style={styles.wrapper} onPress={handleOnPress}>
        <Text style={[styles.buttonText, { color }]}>{children}</Text>
      </TouchableOpacity>
    );
  }
}

TextButton.propTypes = {
  children: PropTypes.string.isRequired,
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
  icon: PropTypes.object,
  handleOnPress: PropTypes.func.isRequired
};

TextButton.defaultProps = {
  color: colors.black
};

const styles = StyleSheet.create({
  wrapper: {
    display: "flex"
  },
  buttonText: {
    fontSize: 16,
    textAlign: "left",
    width: "100%"
  }
});
