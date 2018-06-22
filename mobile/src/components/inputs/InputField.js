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
    const {
      labelText,
      labelTextSize,
      value,
      labelColor,
      textColor,
      borderBottomColor,
      inputType,
      customStyle
    } = this.props;
    return (
      <View style={[customStyle, styles.container]}>
        <Text
          style={[styles.label, { fontSize: labelTextSize, color: labelColor }]}
        >
          {labelText}
        </Text>
        <TextInput
          style={[styles.inputField, { borderBottomColor, color: textColor }]}
          autoCorrect={false}
          underlineColorAndroid={borderBottomColor}
          secureTextEntry={inputType === "password"}
        />
      </View>
    );
  }
}

InputField.propTypes = {
  labelText: PropTypes.string.isRequired,
  labelColor: PropTypes.string,
  labelTextSize: PropTypes.number,
  textColor: PropTypes.string,
  borderBottomColor: PropTypes.string,
  inputType: PropTypes.string,
  customStyle: PropTypes.object
};

InputField.defaultProps = {
  labelTextSize: 14,
  labelColor: colors.white,
  textColor: colors.white,
  borderBottomColor: "transparent"
};

const styles = StyleSheet.create({
  container: {
    display: "flex"
  },
  labelInput: {
    fontWeight: "700",
    marginBottom: 20
  },
  inputField: {
    paddingTop: 5,
    paddingBottom: 5,
    color: colors.white,
    paddingLeft: 5
  }
});
