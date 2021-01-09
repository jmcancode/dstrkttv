import React from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "DSTRKTX",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Channel 2",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "channel 3",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d73",
    title: "channel 4",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d74",
    title: "channel 5",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d75",
    title: "channel 6",
  },
];

const Item = ({ title }) => (
  <TouchableOpacity style={styles.item}>
    <Text adjustsFontSizeToFit numberOfLines={1} style={styles.title}>
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
    fontSize: 12,
    color: "#f5f5f5",
    textTransform: "uppercase",
    justifyContent: "center",
    paddingTop: 21,
    paddingLeft: 2,
  },
  upnext: {
    textTransform: "uppercase",
    fontSize: 24,
    fontWeight: "500",
    paddingBottom: 15,
  },
});

export default PartnerList;
