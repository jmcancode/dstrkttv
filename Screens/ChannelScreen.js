import React from "react";
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  Button,
  Dimensions,
} from "react-native";
import { AppleHeader } from "@freakycoder/react-native-header-view";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";

const { width, height } = Dimensions.get("screen");
const Separator = () => <View style={styles.separator} />;

export default function Channel({ navigation }) {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.applehead}>
          <AppleHeader
            dateTitle={null}
            largeTitle="Discover"
            // imageSource={require("../assets/rr23.jpeg")}
            onPress={() => alert("This will be an account modal")}
          />
          <Separator />
          <View
            style={{
              flex: 1,
              width: "99%",
              alignContent: "center",
            }}
          >
            <View
              style={{
                // flex: 1,
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
                  title="SKY TV"
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
                  title="KY TV"
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
                <MaterialCommunityIcons name="music" size={24} color="#FFF" />
                <Button
                  title="JEFFERY OSBORNE"
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
                  name="bow-tie"
                  size={24}
                  color="#fff"
                />
                <Button
                  title="THE ROYAL GUARD"
                  onPress={() => {
                    navigation.navigate("DstrktXScreen");
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
