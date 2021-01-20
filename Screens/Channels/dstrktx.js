import React, { Component } from "react";
import {
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
    flexDirection: "column",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  imagebutton: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
  },
});

export default class DstrktX extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [], refreshing: true };
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden />
        <ImageBackground
          source={require("../../assets/AdobeStock_340798680.jpg")}
          style={styles.image}
        >
          <View>
            <View style={styles.imagebutton}>
              <Text
                adjustsFontSizeToFit
                numberOfLines={3}
                style={{
                  textTransform: "uppercase",
                  textAlign: "center",
                  color: "#f5f5f5",
                  fontWeight: "bold",
                  fontSize: 25,
                  backgroundColor: "red",
                  margin: 5,
                  padding: 10,
                }}
              >
                DSTRKT X
              </Text>
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
        </ImageBackground>
      </View>
    );
  }
}
