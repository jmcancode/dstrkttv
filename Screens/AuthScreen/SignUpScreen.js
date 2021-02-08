import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  StatusBar,
  TextInput,
  Image,
  Dimensions,
  Button,
  ScrollView,
} from "react-native";

// import { Checkbox } from "react-native-paper";
import { AuthContext } from "../../context";

import { auth, firebase } from "../../firebase";

const { width, height } = Dimensions.get("window");

const SignUp = ({ navigation }) => {
  // const { signUp } = React.useContext(AuthContext);
  // const [checked, setChecked] = React.useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");

  const register = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((response) => {
        const uid = response.user.id;
        const data = {
          id: uid,
          email,
          fullName,
        };
        const usersRef = firebase.firestore().collection("users");

        usersRef
          .doc(uid)
          .set(data)
          .then(() => navigation.navigate("Home", { user: data }));
      })
      .catch((error) => alert(error.message));
  };

  const Anonymmous = ({}) => {
    firebase
      .auth()
      .signInAnonymously(true)
      .then((response) => {
        var uid = user.uid;
        response.authUser.user.signInAnonymously;
      })
      .catch((error) => alert(error.message));
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        navigation.navigate("Home");
      }
    });

    return unsubscribe;
  }, []);

  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          <StatusBar hidden />
          <Image
            source={require("../../assets/icon.png")}
            style={styles.image}
          />
          <Text style={styles.text}>Athletes of the future</Text>
          <TextInput
            style={styles.input}
            placeholder="Full Name"
            placeholderTextColor="#fff"
            onChangeText={(text) => setFullName(text)}
            value={fullName}
            autoFocus
            type="text"
            allowFontScaling
            editable
            textContentType="name"
          />

          <TextInput
            style={styles.input}
            placeholder="Enter your email address"
            placeholderTextColor="#fff"
            value={email}
            onChangeText={(text) => setEmail(text)}
            type="email"
            allowFontScaling
            editable
            keyboardType="email-address"
            textContentType="emailAddress"
          />
          <TextInput
            style={styles.input}
            placeholder="Enter your password"
            placeholderTextColor="#fff"
            onChangeText={(text) => setPassword(text)}
            type="password"
            allowFontScaling
            editable
            secureTextEntry={true}
            textContentType="password"
          />
          <Button
            title="Create an account"
            style={styles.button}
            color="#f5f5f5f5"
            onPress={register}
          />
        </View>
      </ScrollView>
    </>
  );
};

export default SignUp;

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
  containertwo: {
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
    borderTopColor: "transparent",
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    height: 40,
    borderColor: "#fff",
    margin: 10,
    width: "85%",
    borderColor: "#F5F5F5F5",
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
