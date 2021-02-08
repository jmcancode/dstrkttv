import React from "react";
import {
  TouchableOpacity,
  View,
  StyleSheet,
  StatusBar,
  ScrollView,
  ImageBackground,
  Dimensions,
  Alert,
} from "react-native";
// icons
import { Ionicons } from "@expo/vector-icons";
//react native paper
import { List, Switch, TouchableRipple, Text } from "react-native-paper";
// auth context
import { AuthContext } from "../../context";
import { useTheme } from "@react-navigation/native";
import { Touchable } from "react-native";

const { width, height } = Dimensions.get("window");

export const Modal = ({ navigation }) => {
  const theme = useTheme();
  const { signOut, toggleTheme } = React.useContext(AuthContext);
  const { colors } = useTheme();

  return (
    <ScrollView>
      <View style={styles.container}>
        <StatusBar hidden />

        <View style={styles.headercontainer}>
          <Text
            style={{
              color: colors.text,
              fontSize: 24,
              fontWeight: "900",
              alignItems: "center",
            }}
          >
            {" "}
            SETTINGS
          </Text>
          <TouchableOpacity onPress={() => navigation.pop()}>
            <Ionicons name="close-outline" size={24} color={colors.text} />
          </TouchableOpacity>
        </View>
        <View style={{ paddingTop: 5 }}>
          <List.Section>
            <List.Subheader style={{ fontWeight: "900", fontSize: "12" }}>
              MY VIDEOS
            </List.Subheader>
            <TouchableOpacity
              onPress={() => Alert.alert("User History Screen")}
            >
              <List.Item title="Video Library" />
            </TouchableOpacity>
          </List.Section>
          <List.Section>
            <List.Subheader style={{ fontWeight: "900", fontSize: "12" }}>
              SCHEDULE A VISIT
            </List.Subheader>
            <TouchableOpacity
              onPress={() => Alert.alert("DSTRKTX Subscription Screen")}
            >
              <List.Item title="Athlete Training" />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                Alert.alert("Date & Time Picker for scheduled visits screen")
              }
            >
              <List.Item title="Content Creation" />
            </TouchableOpacity>
          </List.Section>
          <List.Section>
            <List.Subheader style={{ fontWeight: "900", fontSize: "12" }}>
              SETTINGS
            </List.Subheader>
            <TouchableOpacity onPress={() => Alert.alert("Settings page")}>
              <List.Item title="Account Details" />
            </TouchableOpacity>
          </List.Section>
          <TouchableRipple
            onPress={() => {
              toggleTheme();
            }}
          >
            <View style={styles.preference}>
              <Text>Dark Theme</Text>
              <View pointerEvents="none">
                <Switch value={theme.dark} />
              </View>
            </View>
          </TouchableRipple>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent",
    paddingTop: 20,
  },
  headercontainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    margin: 20,
    paddingTop: 10,
  },
  texttitle: {},
  headercontainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    margin: 20,
    paddingTop: 10,
  },
  preference: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  image: {
    width: width,
    height: height,
  },
});

export default Modal;
