import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useTheme } from "@react-navigation/native";
import { AppleHeader } from "@freakycoder/react-native-header-view";

export default function Library() {
  const { colors } = useTheme();
  return (
    <View style={styles.container}>
      <AppleHeader
        dateTitle={null}
        largeTitle="Labs"
        largeTitleFontColor={colors.text}
        onPress={() => alert("Account Information will live here!")}
      />
      <View style={{ justifyContent: "center", alignSelf: "center", marginVertical: 290 }}>
        <Text>Labs Screen 🥼 </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
  },
});
