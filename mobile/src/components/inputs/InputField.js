import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from "react-native";
import PropTypes from "prop-types";
import Icon from "react-native-vector-icons/FontAwesome";

import colors from "../../styles/colors";

export default class InputField extends Component {
  render() {
    const { labelText, value } = this.props;
    return (
      <View style={styles.container}>
        <Text>{labelText}</Text>
        <TextInput styles={styles.inputField} value={value} />
      </View>
    );
  }
}

InputField.propTypes = {
  labelText: PropTypes.string.isRequired
};

InputField.defaultProps = {};

const styles = StyleSheet.create({
  container: {
    display: "flex"
  }
});
