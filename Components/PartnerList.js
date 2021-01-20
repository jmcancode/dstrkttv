import React from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  Alert,
} from "react-native";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "DSTRKTX",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Sky Tv",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Ky Tv",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d73",
    title: "Jeffery Osborne",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d74",
    title: "The Royal Guard",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d75",
    title: "Finance",
  },
];

const Item = ({ title, navigation }) => (
  <TouchableOpacity
    style={styles.item}
    onPress={() => navigation.navigate("DstrktXScreen")}
  >
    <Text adjustsFontSizeToFit numberOfLines={3} style={styles.title}>
      {title}
    </Text>
  </TouchableOpacity>
);

const PartnerList = () => {
  const renderItem = ({ item }) => <Item title={item.title} />;

  return (
    <SafeAreaView style={styles.container}>
      <Text adjustsFontSizeToFit numberOfLines={1} style={styles.upnext}>
        Channel
      </Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    flex: 1,
    marginLeft: 15,
    marginTop: 385,
  },
  item: {
    backgroundColor: "#d7b546",
    padding: 8,
    marginVertical: 1,
    marginHorizontal: 3,
    width: 80,
    height: 80,
    borderRadius: 180,
  },
  title: {
    fontSize: 11,
    color: "#f5f5f5",
    textTransform: "uppercase",
    paddingTop: 29,
    paddingLeft: 1,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    textAlign: "center",
  },
  upnext: {
    textTransform: "uppercase",
    fontSize: 24,
    fontWeight: "500",
    paddingBottom: 15,
  },
});

export default PartnerList;
