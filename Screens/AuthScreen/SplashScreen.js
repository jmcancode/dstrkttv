import React from "react";
import { Image, View, StyleSheet } from "react-native";

export default Splash = () => {
  return (
    <View>
      <Image source={require("../../assets/icon.png")} style={styles.splash} />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontWeight: "700",
    textTransform: "uppercase",
  },
  splash: {
    flex: 1,
    justifyContent: "center",
    resizeMode: "cover",
  },
});
