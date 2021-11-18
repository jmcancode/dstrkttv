import React from "react";
import {
  Text,
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
    <>
      <View style={styles.container}>
        <Image source={require("../../assets/icon.png")} style={styles.image} />
        <Text style={styles.text}>For athletes by athletes</Text>
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
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1F1F1F",
    paddingBottom: 250,
    width: width,
    height: height,
  },
  input: {
    borderWidth: 1,
    borderTopColor: "#F5F5F5F5",
    borderLeftColor: "#F5F5F5F5",
    borderRightColor: "#F5F5F5F5",
    height: 40,
    borderColor: "#fff",
    margin: 10,
    width: 350,
    borderColor: "#F5F5F5F5",
    borderRadius: 15,
    color: "#fff",
    padding: 5,
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
