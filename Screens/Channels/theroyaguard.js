import { useTheme } from "@react-navigation/native";
import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  Alert,
  ImageBackground,
  StatusBar,
  Image,
} from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { Button } from "react-native-paper";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  item: {
    backgroundColor: "#f5f5f5",
    padding: 10,
    borderRadius: 5,
    height: 104,
    justifyContent: "center",
  },
  paragraph: {
    paddingTop: 10,
    color: "#fff",
    margin: 5,
    padding: 5,
  },
});

const Data = [
  {
    title: "Video One",
    subtitle: "Show 1 subtitle",
    id: 4671,
  },
];

const Item = ({ title, subtitle }) => (
  <View style={styles.item}>
    <Text>{title}</Text>
    <Text adjustsFontSizeToFit numberOfLines={1}>
      {subtitle}
    </Text>
  </View>
);

export default function theRoyalGuard() {
  const { colors } = useTheme();
  const renderItem = ({ item }) => <Item title={item.title} />;
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <ImageBackground
        source={require("../../assets/trg1.jpg")}
        style={styles.image}
      >
        <View>
          <View>
            <Image
              source={require("../../assets/icon.png")}
              style={{
                width: 100,
                height: 100,
                resizeMode: "contain",
                alignSelf: "center",
              }}
            />
            <Text
              adjustsFontSizeToFit
              numberOfLines={1}
              style={{
                textTransform: "uppercase",
                textAlign: "center",
                color: "#f5f5f5",
                fontWeight: "bold",
                fontSize: 155,
                backgroundColor: "rgba(255,255,255, 0.2)",
                margin: 5,

                padding: 15,
              }}
            >
              The Royal Guard
            </Text>
          </View>
        </View>
        <View style={{ height: 10 }} />
        <View>
          <Text
            adjustsFontSizeToFit
            numberOfLines={1}
            style={{
              justifyContent: "center",
              color: "#fff",
              alignSelf: "center",

              textTransform: "uppercase",
            }}
          >
            {" "}
            Members only
          </Text>
          <Text style={styles.paragraph}>
            Cras ultricies ligula sed magna dictum porta. Donec rutrum congue
            leo eget malesuada. Donec sollicitudin molestie malesuada. Donec
            rutrum congue leo eget malesuada. Nulla quis lorem ut libero
            malesuada feugiat.
          </Text>
          <View
            style={{ flexDirection: "row", justifyContent: "space-around" }}
          >
            <Button
              compact={true}
              mode="text"
              color="#f5f5f5"
              onPress={() => Alert.alert("Open TRG Material")}
            >
              Learn More
            </Button>
            <Button
              mode="text"
              compact={true}
              color="#f5f5f5"
              onPress={() => Alert.alert("Opens Google + Apple store")}
            >
              Subscribe
            </Button>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}
