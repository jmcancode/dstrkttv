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
              <MaterialCommunityIcons
                name="weight-lifter"
                size={24}
                color="#fff"
              />
              <Button
                title="Training Video"
                onPress={() => {
                  navigation.navigate("VideoScreen");
                }}
                color="#fff"
              />
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
});
