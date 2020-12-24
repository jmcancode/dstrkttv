import React from "react";
import { Text, View, ScrollView, StyleSheet, Button } from "react-native";

import { AuthContext } from "../context";

export default function Home() {
  const { signOut } = React.useContext(AuthContext);
  return (
    <ScrollView>
      <View style={styles.container}>
        <Button color="#1f1f1f" title="Sign-out" onPress={() => signOut()} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
  },
});
