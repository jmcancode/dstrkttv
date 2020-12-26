import React from "react";
import { Text, View, SafeAreaView, StyleSheet, Button } from "react-native";

import { AppleHeader } from "@freakycoder/react-native-header-view";

export default function Home() {
  return (
    <View style={styles.applehead}>
      <AppleHeader
        dateTitle={null}
        largeTitle="Watch Now"
        // imageSource={require("../assets/rr23.jpeg")}
        onPress={() => alert("This will be an account modal")}
      />
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
