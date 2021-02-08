import React from "react";
import { View, Text, StyleSheet, Dimensions, ScrollView } from "react-native";
import { AppleHeader } from "@freakycoder/react-native-header-view";
import { useTheme } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    height: height,
  },
  applehead: {
    flex: 1,
    paddingTop: 20,
    width: width,
  },
});

export default function SelectWorkoutScreen() {
  const { colors } = useTheme();
  return (
    <ScrollView style={styles.container}>
      <View style={styles.applehead}>
        <AppleHeader
          dateTitle={null}
          largeTitle="Training"
          largeTitleFontColor={colors.text}
          onPress={() => alert("This will be an account modal")}
        />
      </View>
      <View styles={{ width: width, height: 150, backgroundColor: "#000" }}>
        <Text>Select your Workout / Trainer</Text>
      </View>
    </ScrollView>
  );
}
