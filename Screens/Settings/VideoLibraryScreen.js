import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";

const VideoLibrary = ({ navigation }) => {
  const { colors } = useTheme();
  return (
    <View style={styles.container}>
      <View style={{ alignSelf: "flex-end", marginRight: 15 }}>
        <TouchableOpacity onPress={() => navigation.pop()}>
          <Ionicons
            name="close-outline"
            size={24}
            color={colors.text}
            style={styles.closeIcon}
          />
        </TouchableOpacity>
      </View>
      <Text style={{color: colors.text}}>Video Library</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignSelf: "center",
  },
  closeIcon: {
    position: "absolute",

    left: 145,
    bottom: 401,
  },
});

export default VideoLibrary;
