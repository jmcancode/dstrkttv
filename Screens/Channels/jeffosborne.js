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
    // flexDirection: "column",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    // paddingTop: 140,
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

const image = {
  uri:
    "https://images.squarespace-cdn.com/content/v1/59bc41a7bce1764f56e48bb6/1524251192191-WULW7RXI3QY1SE4TFGEE/ke17ZwdGBToddI8pDm48kH3WlTrg5riJ3iU6udiZS6R7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UbqRn09rQ1JZXDwsxbUZPOKJ96vatJnydhYyIaVp1UMNi5ESGUGczcEeI71TldlvoQ/ART7051+Jeffrey+Osborne+8896+by+Anna+Webber.jpg?format=2500w",
};

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

export default function JeffOsborne({ navigation }) {
  const renderItem = ({ item }) => <Item title={item.title} />;
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <ImageBackground source={image} style={styles.image}>
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
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                margin: 5,

                padding: 15,
              }}
            >
              Jeffrey Osborne TV
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
            about the artist
          </Text>
          <Text style={styles.paragraph}>
            Jeffrey Linton Osborne (born March 9, 1948) is an American
            Grammy–nominated singer–songwriter, musician and lyricist. Osborne
            is the former drummer and lead singer of the American R&B/Soul group
            L.T.D.; with whom he began his musical career in 1970.
          </Text>
          <View
            style={{ flexDirection: "row", justifyContent: "space-around" }}
          >
            <Button
              compact={true}
              mode="text"
              color="silver"
              onPress={() => navigation.navigate("musicPlayer")}
            >
              Listen Now
            </Button>
            <Button
              mode="text"
              compact={true}
              color="silver"
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
