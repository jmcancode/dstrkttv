import { useTheme } from "@react-navigation/native";
import React from "react";
import {
  View,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  Alert,
  Dimensions,
} from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
const { width, height } = Dimensions.get("window");
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
  <TouchableOpacity style={styles.item}>
    <Text adjustsFontSizeToFit numberOfLines={3} style={styles.title}>
      {title}
    </Text>
  </TouchableOpacity>
);

const PartnerList = () => {
  const renderItem = ({ item }) => <Item title={item.title} />;
  const { colors } = useTheme();
  return (
    <View style={styles.container}>
      <Text
        adjustsFontSizeToFit
        numberOfLines={1}
        style={
          ([styles.channel],
          {
            color: colors.text,
            textTransform: "uppercase",
            fontSize: 24,
            fontWeight: "500",
            paddingBottom: 15,
            paddingTop: 50,
          })
        }
      >
        Channel
      </Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
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
    backgroundColor: "#777",

    marginVertical: 1,
    marginHorizontal: 3,
    width: 320,
    height: 150,
    borderRadius: 5,
  },
  title: {
    fontSize: 15,
    color: "#f5f5f5",
    textTransform: "uppercase",
    paddingTop: 50,
    paddingLeft: 10,
    position: "absolute",
    textAlign: "left",
  },
});

export default PartnerList;
