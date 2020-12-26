import React from "react";
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  Button,
  Dimensions,
} from "react-native";

import { AppleHeader } from "@freakycoder/react-native-header-view";

const { width, height } = Dimensions.get("window");

export default function Library() {
  return (
    <View style={styles.container}>
      <View style={styles.applehead}>
        <AppleHeader
          dateTitle={null}
          largeTitle="Library"
          onPress={() => alert("This will be an account modal")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    // backgroundColor: "#1f1f1f",
    width: width,
    height: height,
  },
  applehead: {
    flex: 1,
    paddingTop: 40,
    width: width,
  },
});
