import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  Alert,
  ImageBackground,
  StatusBar,
  Image,
} from "react-native";
import { Button } from "react-native-paper";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  paragraph: {
    paddingTop: 10,
    color: "#fff",
    margin: 5,
    padding: 5,
  },
});

const image = {
  uri:
    "https://thumbor.forbes.com/thumbor/711x521/https://specials-images.forbesimg.com/imageserve/5ebd9eaaf1f488000662fed7/960x0.jpg?fit=scale",
};

export default function kaiSotto() {
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <ImageBackground source={image} style={styles.image}>
        <View>
          <View>
            <Image
              source={require("../../assets/icon.png")}
              style={{
                alignSelf: "center",
                width: 200,
                height: 200,
                
              }}
            />
            <Text
              adjustsFontSizeToFit
              numberOfLines={3}
              style={{
                textTransform: "uppercase",
                textAlign: "center",
                //   color: "#0038a8",
                color: "#f5f5f5",
                fontWeight: "bold",
                fontSize: 25,
                backgroundColor: "rgba(255,255,255, 0.2)",
                margin: 5,
                padding: 10,
              }}
            >
              kai sotto tv
            </Text>
            <View style={{ height: 10 }} />
            <View>
              <Text
                adjustsFontSizeToFit
                numberOfLines={1}
                style={{
                  justifyContent: "center",
                  color: "#fff",
                  alignSelf: "center",

                  textTransform: "uppercase",
                }}
              >
                {" "}
                The future of athletes
              </Text>
              <Text style={styles.paragraph}>
                Vivamus suscipit tortor eget felis porttitor volutpat. Lorem
                ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna
                justo, lacinia eget consectetur sed, convallis at tellus.
                Pellentesque in ipsum id orci porta dapibus. Curabitur aliquet
                quam id dui posuere blandit.
              </Text>
            </View>
            <View
              style={{ flexDirection: "row", justifyContent: "space-around" }}
            >
              <Button
                mode="text"
                onPress={() => Alert.alert("Prompt subscription service")}
                color="#f5f5f5"
                compact={true}
              >
                {" "}
                Game Schedule
              </Button>
              <Button
                mode="text"
                onPress={() => Alert.alert("Prompt subscription service")}
                color="#f5f5f5"
                compact={true}
              >
                {" "}
                Subscribe
              </Button>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}
