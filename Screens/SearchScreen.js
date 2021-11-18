import React from "react";
import { Text, View, StyleSheet, Button, Alert } from "react-native";

import { AppleHeader } from "@freakycoder/react-native-header-view";

import { AuthContext } from "../context";
import { useTheme } from "@react-navigation/native";
import SearchQuery from "../Components/SearchBar/SearchBar";

export default function Search() {
  const { colors } = useTheme();
  const { signOut } = React.useContext(AuthContext);

  return (
    <View style={styles.applehead}>
      <AppleHeader
        dateTitle={null}
        largeTitle="Search"
        largeTitleFontColor={colors.text}
        onPress={() => Alert.alert("Account Information will live here!")}
      />
      <View>
        <View style={styles.searchcontainer}>
          <SearchQuery />
        </View>
        <View>
          <Text style={{ color: "#777", alignSelf: "center", margin: 15 }}>
            Search Results will show here.
          </Text>
        </View>
        <View style={styles.container}>
          <Button
            color={colors.text}
            title="Sign-out"
            onPress={() => signOut()}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    marginTop: 255,
    // backgroundColor: "#1f1f1f",
  },
  applehead: {
    flex: 1,
    paddingTop: 40,
  },
  searchcontainer: {
    paddingTop: 25,
    marginLeft: 15,
    marginRight: 15,
  },
});
