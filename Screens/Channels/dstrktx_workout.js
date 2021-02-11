import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  ImageBackground,
} from "react-native";
import { AppleHeader } from "@freakycoder/react-native-header-view";
import { useTheme } from "@react-navigation/native";
import { Headline, Subheading } from "react-native-paper";

const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    height: height,
  },
  applehead: {
    flex: 1,
    paddingTop: 35,
    width: width,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    marginLeft: 1,
    marginRight: 1,
    padding: 10,
  },
});

const image = require("../../assets/AdobeStock_340798680.jpg");

export default function SelectWorkoutScreen() {
  const { colors } = useTheme();
  return (
    <ScrollView style={styles.container}>
      <View style={styles.applehead}>
        <AppleHeader
          largeTitle={null}
          dateTitle="Tuesday, 9 February"
          dateTitleStyle={{
            marginLeft: 265,
            marginTop: 24,
          }}
          largeTitleFontColor={colors.text}
          onPress={() => alert("This will be an account modal")}
        />
      </View>
      <ImageBackground source={image} style={styles.image}>
        <View
          style={{
            height: 250,
            marginLeft: 5,
            marginRight: 5,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Headline
            style={{
              color: "#d7b546",
              textTransform: "uppercase",
              alignSelf: "flex-start",
              fontSize: 24,
              fontWeight: "bold",
            }}
            adjustsFontSizeToFit
            numberOfLines={2}
          >
            Welcome to DSTRKTX
          </Headline>
          <Subheading
            style={{ color: "#f5f5f5", flexWrap: "wrap", fontSize: 12 }}
            adjustsFontSizeToFit
            numberOfLines={2}
          >
            The new personal fitness experience for everyone workouts built for
            the pros.
          </Subheading>
        </View>
      </ImageBackground>
      <View>
        <Text>Choose your workout </Text>
      </View>
      <View>
        <Text>New Workouts // flats list of videos 15-30min</Text>
      </View>
      <View>
        <Text>Workout Types</Text>
      </View>
    </ScrollView>
  );
}
