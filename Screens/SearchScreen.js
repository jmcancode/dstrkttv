import React from "react";
import { Text, View, SafeAreaView, StyleSheet, Button } from "react-native";

import { AppleHeader } from "@freakycoder/react-native-header-view";

import { AuthContext } from "../context";

export default function Search() {
  const { signOut } = React.useContext(AuthContext);
  return (
    <View style={styles.applehead}>
      <AppleHeader
        dateTitle={null}
        largeTitle="Search"
        // imageSource={require("../assets/rr23.jpeg")}
        onPress={() => alert("Account Information will live here!")}
      />

      <View>
        <View style={styles.container}>
          <Button color="#1f1f1f" title="Sign-out" onPress={() => signOut()} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    marginTop: 255,
    // backgroundColor: "#1f1f1f",
  },
  applehead: {
    flex: 1,
    paddingTop: 40,
  },
});
