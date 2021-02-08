import React, { useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  Alert,
} from "react-native";
// expo packages
import { Camera } from "expo-camera";
// expo icons
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { AsyncStorage } from "@react-native-async-storage/async-storage";
const { width, height } = Dimensions.get("window");

export default function CameraAction({ navigation }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const cameraRef = useRef();
  const snap = async () => {
    if (cameraRef) {
      const photo = await cameraRef.current.takePictureAsync();
      AsyncStorage.setItem(`@{user.uid}-photo`, photo.uri);
    }
  };

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={styles.container}>
      <Camera
        style={styles.camera}
        type={type}
        ref={(camera) => (cameraRef.current = camera)}
      >
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}
          >
            <MaterialIcons name="camera-front" size={34} color="#f5f5f5" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.camerabutton} onPress={snap}>
            <Ionicons name="ios-radio-button-on" size={84} color="#f5f5f5" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigation.pop();
            }}
          >
            <MaterialIcons name="close" size={34} color="#f5f5f5" />
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    backgroundColor: "transparent",
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1,
    margin: 15,
    padding: 5,
    paddingBottom: 15,
    paddingTop: 19,
  },
  button: {
    alignSelf: "flex-start",
    alignItems: "center",
  },
  camerabutton: {
    alignSelf: "flex-end",
  },
  text: {
    fontSize: 25,
    color: "white",
    fontWeight: "700",
  },
});
