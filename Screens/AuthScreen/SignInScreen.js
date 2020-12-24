import React from "react";
import {
  Text,
  SafeAreaView,
  View,
  StyleSheet,
  TextInput,
  Button,
  Image,
  Dimensions,
} from "react-native";

import { AuthContext } from "../../context";

const { width, height } = Dimensions.get("window");

export default function SignIn() {
  const { signIn } = React.useContext(AuthContext);
  return (
    <SafeAreaView style={styles.container}>
      <Image source={require("../../assets/icon.png")} style={styles.image} />
      <Text style={styles.text}>WELCOME back</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your email address"
        placeholderTextColor="#fff"
      />
      <TextInput
        style={styles.input}
        placeholder="Enter your password"
        placeholderTextColor="#fff"
      />
      <Button
        style={styles.button}
        title="Sign-In"
        color="#f5f5f5"
        onPress={() => signIn()}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1F1F1F",
    width: width,
    height: height,
  },
  input: {
    borderWidth: 1,
    borderTopColor: "transparent",
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    height: 40,
    borderColor: "#fff",
    margin: 10,
    width: 350,
    color: "#fff",
  },
  text: {
    fontSize: 25,
    fontWeight: "800",
    alignContent: "center",
    color: "#fff",
    textTransform: "uppercase",
    paddingBottom: 30,
  },
  image: {
    alignItems: "center",
    width: 150,
    height: 150,
    marginBottom: 35,
  },
  button: {
    paddingTop: 26,
    backgroundColor: "red",
  },
});
