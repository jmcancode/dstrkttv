import React from "react";
// RN
import {
  ScrollView,
  View,
  Text,
  Dimensions,
  StatusBar,
  StyleSheet,
  Button,
} from "react-native";
// expo-av
import { Video, AVPlaybackStatus } from "expo-av";
// expo icons
import { AntDesign } from '@expo/vector-icons';
// RN Picker
import { Picker } from "@react-native-picker/picker";
import { useTheme } from "@react-navigation/native";

const { width } = Dimensions.get("screen").width;
const { height } = Dimensions.get("screen").height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    height: height,
  },
  title: {

    
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "200",
    color: "#d7b546",
  },
  paragraph: {
    fontSize: 12,
    fontWeight: "100",
    color: "#777",
    paddingLeft: 10,
    paddingTop: 2,
  },
  fixToText: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 10,
  },
});

export default function VideoPlayer() {
  const {colors} = useTheme();
  const [status, setStatus] = React.useState({});
  const video = React.useRef(null);
  return (
    <ScrollView>
      <View style={styles.container}>
        <StatusBar hidden />
        <Video
          source={require("../assets/videos/dstrkt/58b4824252ce4a1fbf4d7fa82355a05e.mp4")}
          rate={1.0}
          volume={10.0}
          isMuted={false}
          resizeMode="cover"
          shouldPlay
          ref={video}
          useNativeControls
          isLooping
          onPlaybackStatusUpdate={status => setStatus(() => status)}
          style={{ flex: 1, width: width, height: 300 }}
        />
        <View style={{ paddingTop: 10, paddingLeft: 10 }}>
          <Text style={{ color: colors.text, fontSize: 36,
    fontWeight: "700"}} adjustsFontSizeToFit numberOfLines={1}>
            Full Body Workout
          </Text>
          <Text style={styles.subtitle} adjustsFontSizeToFit numberOfLines={1}>
            DSTRKT-X - Trainer Name
          </Text>
        </View>
        <View>
          <Text style={styles.paragraph} adjustsFontSizeToFit>
            Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
            Proin eget tortor risus. Quisque velit nisi, pretium ut lacinia in,
            elementum id enim. Curabitur arcu erat, accumsan id imperdiet et,
            porttitor at sem. Proin eget tortor risus. Quisque velit nisi,
            pretium ut lacinia in, elementum id enim.
          </Text>
        </View>
        <View style={styles.fixToText}>
          <Button
            title="Workout Details"
            onPress={() => alert("Are you ready to change your diet?")}
            color={colors.text}
            accessibilityLabel="Call to action for those who can not hear."
          />
          <Button
            title="Subscribe"
            onPress={() => alert("Are you ready to access your workout?")}
            color={colors.text}
            accessibilityLabel="Call to action for those who can not hear."
          />
        </View>
        <View style={{flexDirection: "row", justifyContent: "center"}}>
        <Button
        color={colors.text}
          title={status.isPlaying ? 'Pause' : 'Play'}
          onPress={() =>
            status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
          }
        />
        <AntDesign name="caretright" size={24} color={colors.text} style={{marginTop: 9}}
          onPress={() =>
            status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
          } />
        </View>
      </View>
    </ScrollView>
  );
}
