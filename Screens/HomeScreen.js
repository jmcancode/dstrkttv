import React from "react";
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  StatusBar,
  ImageBackground,
  Alert,
  Image,
} from "react-native";
// react-native-paer
import { Button, shadow } from "react-native-paper";
// @freakycoder package for app header
import { AppleHeader } from "@freakycoder/react-native-header-view";
// custom components
import CameraAction from "../Components/Camera";
import GenreList from "../Components/ChannelList";
import UpNextList from "../Components/WatchList";
import PartnerList from "../Components/PartnerList";
//gesture handler
import { ScrollView } from "react-native-gesture-handler";
import { useTheme } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");
const Separator = () => <View style={styles.separator} />;

export default function Home({ navigation }) {
  const { colors } = useTheme();
  return (
    <>
      <ScrollView alwaysBounceVertical>
        <StatusBar />
        <View>
          <View style={styles.applehead}>
            <AppleHeader
              dateTitle={null}
              largeTitle="Watch Now"
              largeTitleFontColor={colors.text}
              imageSource={require("../assets/rr23.jpeg")}
              onPress={() => navigation.navigate("Modal")}
            />

            <GenreList />
          </View>
          <UpNextList />
          <PartnerList />
          <View
            style={{
              width: width,
              height: 350,
              marginTop: 301,
              borderRadius: 5,
              alignSelf: "center",
              shadowRadius: 6,
            }}
          >
            <ImageBackground
              source={require("../assets/AdobeStock_340798680.jpg")}
              style={{ width: "100%", height: "100%" }}
            >
              <View style={{ justifyContent: "center" }}>
                <View
                  style={{
                    backgroundColor: "rgba(255, 255, 255, .2)",
                    justifyContent: "center",
                    alignItems: "center",
                    height: 350,
                    width: "100%",
                    alignContent: "center",
                    borderRadius: 5,
                  }}
                >
                  <View>
                    <Image
                      style={{ width: 100, height: 100 }}
                      source={require("../assets/icon.png")}
                    />
                  </View>
                  <Text
                    adjustsFontSizeToFit
                    numberOfLines={1}
                    style={{
                      color: colors.text,
                      textTransform: "uppercase",
                      fontSize: 50,
                      fontWeight: "900",
                      padding: 5,
                    }}
                  >
                    sponsored content
                  </Text>
                  <Button
                    mode="text"
                    color={colors.text}
                    onPress={() => Alert.alert("Sponsored page")}
                  >
                    learn more
                  </Button>
                </View>
              </View>
            </ImageBackground>
            <View
              style={{
                height: 250,
              }}
            />
          </View>
        </View>
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
  separator: {
    marginVertical: 8,
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  featurecard: {
    backgroundColor: "transparent",
    borderColor: "red",
    width: width,
    height: 250,
    position: "absolute",
    marginTop: 650,
    marginLeft: 10,
  },
});
