import React from "react";
import {
  TouchableOpacity,
  View,
  StyleSheet,
  StatusBar,
  ScrollView,
} from "react-native";
// icons
import { Ionicons } from "@expo/vector-icons";
//react native paper
import { List, Switch, TouchableRipple, Text } from "react-native-paper";
// auth context
import { AuthContext } from "../../context";
import { useTheme } from "@react-navigation/native";

export const Modal = ({ navigation }) => {
  const theme = useTheme();
  const { signOut, toggleTheme } = React.useContext(AuthContext);
  const { colors } = useTheme();

  return (
    <ScrollView>
      <View style={styles.container}>
        <StatusBar hidden />
        <View style={styles.headercontainer}>
          <Text style={([styles.texttitle], { color: colors.text })}>
            {" "}
            SETTINGS
          </Text>
          <TouchableOpacity onPress={() => navigation.pop()}>
            <Ionicons name="close-outline" size={24} color={colors.text} />
          </TouchableOpacity>
        </View>
        <View style={{ paddingTop: 5 }}>
          <List.Section>
            <List.Subheader>My Videos</List.Subheader>
            <List.Item title="Video Library" />

          </List.Section>
          <List.Section>
            <List.Subheader>Schedule</List.Subheader>
            <List.Item title="Fitness Training" />
            <List.Item title="Content Creation" />
            <List.Item title="Consulting" />
          </List.Section>
          <List.Section>
            <List.Subheader>SETTINGS</List.Subheader>
            <List.Item title="Account Details" />
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
  texttitle: {
    fontSize: 24,
    fontWeight: "900",
    alignItems: "center",
  },
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
});

export default Modal;
