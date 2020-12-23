import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default Home = () => {
  return (
    <View>
      <Text>This is the home page</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontWeight: "700",
    textTransform: "uppercase",
  },
});
