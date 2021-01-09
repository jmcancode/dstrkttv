import React from "react";
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  Button,
  Dimensions,
} from "react-native";
// @freakycoder custom apple header
import { AppleHeader } from "@freakycoder/react-native-header-view";
//Custom compoents
import VideoSlider from "../Components/VideoSlider";
// gestsure handler package
import { ScrollView } from "react-native-gesture-handler";
// expo icons packages
import { AntDesign } from "@expo/vector-icons";

const { width, height } = Dimensions.get("screen");

export default function Library({ navigation }) {
  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.applehead}>
            <AppleHeader
              dateTitle={null}
              largeTitle="Live"
              onPress={() => alert("This will be an account modal")}
            />
          </View>
          <View
            style={{
              flex: 1,
              width: width,
              padding: 5,
              height: 250,
              backgroundColor: "#1f1f1f",
            }}
          >
            <View style={styles.camera}>
              <AntDesign
                name="camerao"
                size={24}
                color="#fff"
                onPress={() => {
                  navigation.navigate("CameraAction");
                }}
              />
              <Button
                title="Start a Live Video"
                onPress={() => {
                  navigation.navigate("CameraAction");
                }}
                color="#fff"
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    width: width / 2,
  },
  applehead: {
    flex: 1,
    paddingTop: 40,
    width: width,
  },
  firstlist: {
    flex: 1,
    position: "absolute",
    fontSize: 12,
    fontWeight: "200",
    marginLeft: 10,
  },
  camera: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 90,
  },
});
