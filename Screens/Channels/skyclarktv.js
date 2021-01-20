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

const image = {
  uri:
    "https://www.zagsblog.com/wp-content/uploads/2020/10/Ek-Ax3RXgAITWil.jpg",
};

export default class SkyClarkTv extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [], refreshing: true };
  }

  render() {
    return (
      <View style={styles.container}>
      <StatusBar hidden/>
        <ImageBackground source={image} style={styles.image}>
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
                  backgroundColor: "#0033A0",
                  margin: 5,
                  padding: 10,
                }}
              >
                Sky clark tv
              </Text>
              <Button
                mode="outlined"
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
