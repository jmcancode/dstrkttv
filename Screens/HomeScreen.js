import React from "react";
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  Button,
  Dimensions,
} from "react-native";
// @freakycoder package for app header
import { AppleHeader } from "@freakycoder/react-native-header-view";
// custom components
import CameraAction from "../Components/Camera";
import GenreList from "../Components/ChannelList";
import UpNextList from "../Components/WatchList";
import PartnerList from "../Components/PartnerList";
//gesture handler
import { ScrollView } from "react-native-gesture-handler";

const { width, height } = Dimensions.get("window");

export default function Home({ navigation }) {
  return (
    <>
      <ScrollView alwaysBounceVertical>
        <View style={styles.applehead}>
          <AppleHeader
            dateTitle={null}
            largeTitle="Watch Now"
            imageSource={require("../assets/rr23.jpeg")}
            onPress={() => alert("This will be an account modal")}
          />
          <GenreList />
        </View>
        <UpNextList />
        <PartnerList />
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    width: width,
    height: height * 2,
  },
  applehead: {
    flex: 1,
    paddingTop: 40,
  },
});
