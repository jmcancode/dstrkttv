import React from "react";
import { StyleSheet, View } from "react-native";
import MapView from "react-native-maps";

export default function Maps() {
  return (
    <View style={StyleSheet.absoluteFillObject}>
      <MapView>
        <View style={{ position: "absolute", top: 100, left: 50 }} />
      </MapView>
    </View>
  );
}
