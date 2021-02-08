import React from "react";
import { SafeAreaView, View, FlatList, StyleSheet, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
//expo icons
import { Entypo } from "@expo/vector-icons";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "Sports",
    icon: <Entypo name="sports-club" size={24} color="black" />,
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Performance",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Nutrition",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d73",
    title: "Finance",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d74",
    title: "Life Skills",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29e79",
    title: "Mental",
  },
];

const Item = ({ title, icon }) => (
  <TouchableOpacity style={styles.item}>
    <Entypo name="sports-club" size={12} color="#f5f5f5" />
    <Text style={styles.title}>{title}</Text>
  </TouchableOpacity>
);

const GenreList = () => {
  const renderItem = ({ item }) => <Item title={item.title} />;

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate("SkyClarkTv")}
      >
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginLeft: 15,
    marginTop: 15,
  },
  item: {
    flexDirection: "row",
    backgroundColor: "#777",
    padding: 8,
    marginVertical: 1,
    marginHorizontal: 3,
    width: 120,
    height: 30,
    borderRadius: 3,
  },
  title: {
    fontSize: 12,
    color: "#f5f5f5",
    textTransform: "uppercase",
    paddingLeft: 5,
    overflow: "hidden",
  },
});

export default GenreList;
