import React from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import VideoPlayer from "../Components/VideoPlayer";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const VideoScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.container}>
        <VideoPlayer />
      </View>
    </ScrollView>
  );
};

export default VideoScreen;
