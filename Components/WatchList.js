import { useTheme } from "@react-navigation/native";
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
  const { colors } = useTheme();
  return (
    <SafeAreaView style={styles.container}>
      <Text
        adjustsFontSizeToFit
        numberOfLines={1}
        style={
          ([styles.upnext],
          {
            color: colors.text,
            textTransform: "uppercase",
            fontSize: 24,
            fontWeight: "500",
            paddingTop: 25,
          })
        }
      >
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
    backgroundColor: "#303538",
    padding: 8,
    marginVertical: 1,
    marginHorizontal: 3,
    width: 320,
    height: 150,
    borderRadius: 3,
  },
  title: {
    fontSize: 15,
    color: "#f5f5f5",
    textTransform: "uppercase",
    paddingLeft: 10,
    paddingTop: 50
  },
  upnext: {},
  upnextsub: {
    fontSize: 12,
    color: "#777",
    fontWeight: "200",
    paddingBottom: 15,
  },
});

export default UpNextList;
