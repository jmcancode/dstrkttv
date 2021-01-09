import React from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "Sports",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Training",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d721233",
    title: "Nutrition",
  },
];

const Item = ({ title, style }) => (
  <TouchableOpacity onPress={() => {}} style={[styles.item, style]}>
    <Text adjustsFontSizeToFit numberOfLines={1} style={styles.title}>
      {title}
    </Text>
  </TouchableOpacity>
);

const UpNextList = () => {
  const renderItem = ({ item }) => <Item title={item.title} />;

  return (
    <SafeAreaView style={styles.container}>
      <Text adjustsFontSizeToFit numberOfLines={1} style={styles.upnext}>
        Up Next
      </Text>
      <Text adjustsFontSizeToFit numberOfLines={1} style={styles.upnextsub}>
        What everyone's watching
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
    flex: 5,
    justifyContent: "center",
    marginLeft: 15,
  },
  item: {
    backgroundColor: "#777",
    padding: 8,
    marginVertical: 1,
    marginHorizontal: 3,
    width: 320,
    height: 150,
    borderRadius: 3,
  },
  title: {
    fontSize: 12,
    color: "#f5f5f5",
    textTransform: "uppercase",
    paddingLeft: 5,
  },
  upnext: {
    textTransform: "uppercase",
    fontSize: 24,
    fontWeight: "500",
    
    paddingTop: 15,
  },
  upnextsub: {
    fontSize: 12,
    color: "#777",
    fontWeight: "200",
    paddingBottom: 15,
  },
});

export default UpNextList;
