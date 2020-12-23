import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default function SignIn() {
  return (
    <View>
      <Text style={styles.text}>This is the Sign-In page</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    marginVertical: 325,
    marginLeft: 120,
    justifyContent: "center",
    fontWeight: "700",
    textTransform: "uppercase",
  },
});
