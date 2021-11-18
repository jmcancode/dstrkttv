import { useTheme } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import {
  ScrollView,
  View,
  Alert,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Avatar, Divider, List, TextInput, Button } from "react-native-paper";
import { Entypo } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

const { width, height } = Dimensions.get("screen");

const SettingsScreen = ({ navigation }) => {
  const theme = useTheme();
  const { colors } = useTheme();
  const [expanded, setExpanded] = React.useState(true);
  const [text, setText] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [image, setImage] = useState(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const {
          status,
        } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    e.preventDefault();
    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const handlePress = () => setExpanded(!expanded);

  return (
    <ScrollView bounces style={{ width: width, height: height, marginTop: 25 }}>
      <View style={{ alignSelf: "flex-end", marginRight: 19 }}>
        <TouchableOpacity onPress={() => navigation.pop()}>
          <Ionicons name="close-outline" size={24} color={colors.text} />
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate("CameraAction")}>
          <Avatar.Image
            size={94}
            source={{ uri: image }}
            style={{
              margin: 10,
              alignSelf: "center",
              backgroundColor: "#a68d53",
            }}
          />
          {image && (
            <Avatar.Image
              source={{ uri: image }}
              style={{ width: 200, height: 200 }}
            />
          )}
        </TouchableOpacity>
        <Ionicons
          name="camera"
          size={24}
          color={colors.text}
          style={{ position: "absolute", top: 80, left: 235 }}
          onPress={() => navigation.navigate("CameraAction")}
        />
      </View>
      <Divider theme={theme} />
      <View>
        <List.Section title="Update your profile">
          <View style={{ marginLeft: 10, marginRight: 10 }}>
            <View style={{ marginTop: 5, marginBottom: 5 }}>
              <TextInput
                mode="flat"
                placeholder="Enter your full name"
                value={text}
                onChangeText={(text) => setText(text)}
                selectionColor="#fff"
                underlineColor="#d15sk"
              />
            </View>
            <View style={{ marginTop: 5, marginBottom: 5 }}>
              <TextInput
                mode="flat"
                placeholder="Enter your email"
                value={email}
                onChangeText={(email) => setEmail(email)}
                selectionColor="#fff"
                underlineColor="#d15sk"
              />
            </View>
            <View style={{ marginTop: 5, marginBottom: 5 }}>
              <TextInput
                mode="flat"
                placeholder="Enter your password"
                value={password}
                onChangeText={(password) => setPassword(password)}
                selectionColor="#fff"
                underlineColor="#d15sk"
              />
            </View>
            <View style={{ margin: 5, marginBottom: 10 }}>
              <Button
                mode="text"
                onPress={() => Alert.alert("Saved to firebase")}
                color={colors.text}
              >
                Update
              </Button>
            </View>
          </View>
          <Divider />
        </List.Section>
        <List.Section title="Athlete Access">
          <List.Item
            title="Scout Pass"
            titleStyle={{ color: colors.text }}
            style={{ marginLeft: 9 }}
            left={(props) => (
              <List.Icon {...props} icon="ticket" color={colors.text} />
            )}
            onPress={() => navigation.navigate("ScoutPass")}
          />
        </List.Section>
        <List.Section title="Private Information + Data">
          <List.Accordion
            title="Legal & Data"
            left={(props) => (
              <List.Icon {...props} icon="cog" color={colors.text} />
            )}
            expanded={expanded}
            onPress={handlePress}
            titleStyle={{ color: colors.text }}
          >
            <List.Item title="User Data" />
            <List.Item title="Legal" />
            <List.Item title="California Privacy Act" />
          </List.Accordion>
        </List.Section>
      </View>
    </ScrollView>
  );
};

export default SettingsScreen;
