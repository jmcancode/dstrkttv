import React from "react";
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  Button,
  Dimensions,
  ImageBackground,
} from "react-native";
import { AppleHeader } from "@freakycoder/react-native-header-view";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
import { useTheme } from "@react-navigation/native";

const { width, height } = Dimensions.get("screen");
const Separator = () => <View style={styles.separator} />;

export default function Channel({ navigation }) {
  const theme = useTheme();
  const { colors } = useTheme();
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.applehead}>
          <AppleHeader
            dateTitle={null}
            largeTitle="Discover"
            largeTitleFontColor={colors.text}
            // imageSource={require("../assets/rr23.jpeg")}
            onPress={() => alert("This will be an account modal")}
          />
          <View style={{ height: 20 }} />
          <View
            style={{
              flex: 1,
              width: "99%",
              alignContent: "center",
            }}
          >
            <View
              style={{
                padding: 15,
                height: 250,
                backgroundColor: "#1f1f1f",
                borderRadius: 5,
                margin: 5,
              }}
            >
              <View style={styles.camera}>
                <MaterialCommunityIcons
                  name="weight-lifter"
                  size={24}
                  color="#fff"
                />
                <Button
                  title="DSTRKT X"
                  onPress={() => {
                    navigation.navigate("DstrktXScreen");
                  }}
                  color="#fff"
                />
              </View>
            </View>
            <View
              style={{
                padding: 15,
                height: 250,
                backgroundColor: "#1f1f1f",
                borderRadius: 5,
                margin: 5,
              }}
            >
              <View style={styles.camera}>
                <MaterialCommunityIcons
                  name="basketball"
                  size={24}
                  color="#fff"
                />
                <Button
                  title="SKYY TV"
                  onPress={() => {
                    navigation.navigate("SkyClarkTv");
                  }}
                  color="#fff"
                />
              </View>
            </View>
            <View
              style={{
                padding: 15,
                height: 250,
                backgroundColor: "#1f1f1f",
                borderRadius: 5,
                margin: 5,
              }}
            >
              <View style={styles.camera}>
                <MaterialCommunityIcons
                  name="basketball"
                  size={24}
                  color="#fff"
                />
                <Button
                  title="KAI SOTTO TV"
                  onPress={() => {
                    navigation.navigate("KaiSotto");
                  }}
                  color="#fff"
                />
              </View>
            </View>
            <View
              style={{
                padding: 15,
                height: 250,
                backgroundColor: "#1f1f1f",
                borderRadius: 5,
                margin: 5,
              }}
            >
              <View style={styles.camera}>
                <MaterialCommunityIcons name="music" size={24} color="#FFF" />
                <Button
                  title="JEFFREY OSBORNE"
                  onPress={() => {
                    navigation.navigate("JeffO");
                  }}
                  color="#fff"
                />
              </View>
            </View>

            <View
              style={{
                padding: 15,
                height: 250,
                backgroundColor: "#1f1f1f",
                borderRadius: 5,
                margin: 5,
              }}
            >
              <View style={styles.camera}>
                <MaterialCommunityIcons name="bow-tie" size={24} color="#fff" />
                <Button
                  title="THE ROYAL GUARD"
                  onPress={() => {
                    navigation.navigate("theRoyalGuard");
                  }}
                  color="#fff"
                />
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
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
  camera: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 90,
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
