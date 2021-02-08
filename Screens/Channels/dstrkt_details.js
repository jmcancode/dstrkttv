import React, { useState } from "react";
import {
  Text,
  Dimensions,
  View,
  StyleSheet,
  Button,
  Alert,
} from "react-native";
import MapView, { Callout, Marker } from "react-native-maps";
const { width, height } = Dimensions.get("screen");
import DateTimePicker from "@react-native-community/datetimepicker";

const styles = StyleSheet.create({
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  container: {
    width: 450,
    height: 350,
    top: 600,
    backgroundColor: "rgba(255,255,255, 0.55)",
  },
  innerContainer: {
    position: "relative",
    top: 12,
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
    margin: 5,
    height: 300,
  },
  header: {
    fontWeight: "bold",
    alignSelf: "center",
    color: "#d7b546",
    fontSize: 20,
    textTransform: "uppercase",
    margin: 5,
  },
});

const initialRegion = {
  latitude: 34.242043,
  longitude: -118.56677,
  latitudeDelta: 0.05,
  longitudeDelta: 0.05,
};

const LearnMore = () => {
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };

  const showTimepicker = () => {
    showMode("time");
  };

  return (
    <View>
      <MapView
        mapType={"standard"}
        followsUserLocation={true}
        style={styles.map}
        showsUserLocation={false}
        style={styles.map}
        zoomEnabled={true}
        pitchEnabled={true}
        showsBuildings={true}
        showsIndoorLevelPicker={true}
        initialRegion={initialRegion}
        toolbarEnabled={true}
        showsCompass={true}
      >
        <MapView.Marker
          coordinate={{ latitude: 34.242043, longitude: -118.56677 }}
          tracksViewChanges={false}
          pinColor="#1f1f1f"
          title="The DSTRKT HQ"
          description="19851 Nordhoff PL #104 Chatsworth, California 91311"
        />
        <MapView.Callout>
          <View style={styles.container}>
            <Text style={styles.header}>Schedule a Tour</Text>
            <View style={styles.innerContainer}>
              <View>
                <Button
                  onPress={showDatepicker}
                  title="SELECT A DATE"
                  color="#1f1f1f"
                  style={{ backgroundColor: "blue" }}
                />
              </View>
              <View>
                <Button
                  onPress={showTimepicker}
                  title="TIME SLOTS"
                  color="#1f1f1f"
                />
              </View>
              {show && (
                <DateTimePicker
                  testID="dateTimePicker"
                  value={date}
                  mode={mode}
                  is24Hour={true}
                  display="default"
                  onChange={onChange}
                />
              )}
            </View>
          </View>
        </MapView.Callout>
      </MapView>
    </View>
  );
};

export default LearnMore;
