import React from "react";
import {
  Text,
  View,
  StyleSheet,
  StatusBar,
  TextInput,
  Image,
  Dimensions,
  Button,
} from "react-native";
import { AuthContext } from "../../context";

const { width, height } = Dimensions.get("window");

export default function SignUp() {
  const { signUp } = React.useContext(AuthContext);
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <Image source={require("../../assets/icon.png")} style={styles.image} />
      <Text style={styles.text}>Athletes of the future</Text>
      <TextInput
        style={styles.input}
        placeholder="Full Name"
        placeholderTextColor="#fff"
      />
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
        title="Create an account"
        style={styles.button}
        color="#f5f5f5f5"
        onPress={() => signUp()}
      />
    </View>
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
    fontSize: 20,
    fontWeight: "800",
    justifyContent: "center",
    alignContent: "center",
    paddingBottom: 25,
    color: "#fff",
    textTransform: "uppercase",
  },
  image: {
    width: 150,
    height: 150,
  },
  button: {
    color: "#fff",
    borderColor: "#f5f5f5f5",
    marginTop: 36,
  },
});
