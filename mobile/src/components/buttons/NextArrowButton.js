import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight
} from "react-native";
import PropTypes from "prop-types";
import Icon from "react-native-vector-icons/FontAwesome";

import colors from "../../styles/colors";

export default class NextArrowButton extends Component {
  render() {
    const { handleNextButton, disabled } = this.props;
    const opacityStyle = disabled
      ? { backgroundColor: "rgba(255,255,255,0.2)" }
      : { backgroundColor: "rgba(255,255,255,0.6)" };

    /*underlayColor="white"*/

    return (
      <View>
        <TouchableOpacity
          onPress={handleNextButton}
          style={[opacityStyle, styles.button]}
        >
          <Icon
            name="angle-right"
            size={32}
            color={colors.primary}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

NextArrowButton.propTypes = {
  disabled: PropTypes.bool
};

NextArrowButton.defaultProps = {
  disabled: false
};

const styles = StyleSheet.create({
  icon: {
    marginRight: -2,
    marginTop: -2
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    width: 60,
    height: 60
  }
});
