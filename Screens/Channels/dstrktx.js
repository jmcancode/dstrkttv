import React, { Component } from "react";
import {
  Image,
  Text,
  View,
  StyleSheet,
  Alert,
  ImageBackground,
  StatusBar,
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

export default function DstrktX({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <ImageBackground
        source={require("../../assets/AdobeStock_340798680.jpg")}
        style={styles.image}
      >
        <View>
          <View style={styles.imagebutton}>
            <Image
              source={require("../../assets/icon.png")}
              style={{
                width: 100,
                height: 100,
                resizeMode: "contain",
                alignSelf: "center",
              }}
            />
            <Text
              adjustsFontSizeToFit
              numberOfLines={1}
              style={{
                textTransform: "uppercase",
                textAlign: "center",
                color: "#f5f5f5",
                fontWeight: "bold",
                fontSize: 35,
                backgroundColor: "rgba(255,255,255, 0.2)",
                margin: 5,
                padding: 10,
              }}
            >
              The DSTRKT
            </Text>
            <Text style={styles.paragraph}>
              Vivamus suscipit tortor eget felis porttitor volutpat. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Vivamus magna justo,
              lacinia eget consectetur sed, convallis at tellus. Pellentesque in
              ipsum id orci porta dapibus. Curabitur aliquet quam id dui posuere
              blandit.
            </Text>
            <View
              style={{ flexDirection: "row", justifyContent: "space-around" }}
            >
              <Button
                mode="text"
                onPress={() => navigation.navigate("Learn More")}
                color="#f5f5f5"
                compact={true}
              >
                {" "}
                Learn More
              </Button>
              <Button
                mode="text"
                onPress={() => navigation.navigate("SelectWorkout")}
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
