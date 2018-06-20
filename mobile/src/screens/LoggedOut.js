import React from "react";
import {
  Alert,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight
} from "react-native";

import colors from "../styles/colors";
import logo from "../images/pencil.png";
import Icon from "react-native-vector-icons/FontAwesome";

import RoundedButton from "../components/buttons/RoundedButton";
import TextButton from "../components/buttons/TextButton";

const colorPrimary = colors.primary;

export default class LoggedOut extends React.Component {
  onFacebookPress() {
    Alert.alert("Facebook button pressed");
  }
  onCreateAccountPress() {
    Alert.alert("Create account button pressed");
  }
  onMoreOptionsPress() {
    Alert.alert("More options button pressed");
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.welcomeWrapper}>
          <Image source={logo} style={styles.logo} />
          <Text style={styles.title}>Welcome To Do</Text>
          <RoundedButton
            backgroundColor="white"
            color={colorPrimary}
            icon={
              <Icon name="facebook" size={20} style={styles.facebookIcon} />
            }
            handleOnPress={this.onFacebookPress}
          >
            Login with Facebook
          </RoundedButton>
          <RoundedButton
            color={colors.white}
            handleOnPress={this.onCreateAccountPress}
          >
            Create New Account
          </RoundedButton>

          <TextButton
            id="moreOptionsButton"
            color={colors.white}
            handleOnPress={this.onMoreOptionsPress}
          >
            More options
          </TextButton>
          <View style={styles.termAndConditional}>
            <Text style={styles.termsText}>
              By tapping continue, Create Account or More options,
            </Text>
            <TouchableHighlight style={styles.linkButton}>
              <Text style={styles.termsText}>Term of services</Text>
            </TouchableHighlight>
            <Text style={styles.termsText}>, </Text>
            <TouchableHighlight style={styles.linkButton}>
              <Text style={styles.termsText}>Payment Term of services</Text>
            </TouchableHighlight>
            <Text style={styles.termsText}>, </Text>
            <TouchableHighlight style={styles.linkButton}>
              <Text style={styles.termsText}>Privacy Policy</Text>
            </TouchableHighlight>
            <Text style={styles.termsText}> and </Text>
            <TouchableHighlight style={styles.linkButton}>
              <Text style={styles.termsText}>Nondiscrimination Policy</Text>
            </TouchableHighlight>
            <Text style={styles.termsText}>.</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    backgroundColor: colors.primary,
    justifyContent: "center"
  },
  logo: {
    width: 50,
    height: 50,
    marginTop: 50,
    marginBottom: 40
  },
  welcomeWrapper: {
    flex: 1,
    display: "flex",
    padding: 20,
    marginTop: 30
  },
  title: {
    fontSize: 30,
    marginTop: 20,
    color: colors.white,
    fontWeight: "300",
    marginBottom: 40
  },
  facebookIcon: {
    color: colorPrimary,
    position: "relative",
    left: 30,
    zIndex: 8
  },
  termsText: {
    color: colors.white,
    fontSize: 13,
    fontWeight: "600"
  },
  termAndConditional: {
    marginTop: 15,
    flexWrap: "wrap",
    alignItems: "flex-start",
    flexDirection: "row"
  },
  linkButton: {
    borderBottomWidth: 1,
    borderBottomColor: colors.white
  }
});
