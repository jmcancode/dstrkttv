import * as React from "react";

import { View, StyleSheet, ScrollView, Alert } from "react-native";

import {
  Button,
  TextInput,
  Divider,
  Checkbox,
  Title,
  Subheading,
} from "react-native-paper";

export default function ScoutPassScreen({ navigation }) {
  const [firstname, setFirstName] = React.useState("");
  const [lastname, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");

  const [checked, setChecked] = React.useState(false);
  const [checkedTwo, setCheckedTwo] = React.useState(false);
  const [checkedThree, setCheckedThree] = React.useState(false);
  const [checkedFour, setCheckedFour] = React.useState(false);

  return (
    <ScrollView bounces style={styles.container}>
      <View style={{ position: "absolute", top: 50, left: 325, zIndex: 1 }}>
        <Button onPress={() => navigation.pop()}>Close</Button>
      </View>
      <View style={styles.inner}>
        <View style={{ justifyContent: "center", alignSelf: "center" }}>
          <Title style={{ textTransform: "uppercase" }}>
            Scouts Pass Request
          </Title>
        </View>
        <TextInput
          label="First Name"
          value={firstname}
          onChangeText={(firstname) => setFirstName(firstname)}
          style={{ backgroundColor: "transparent" }}
        />
        <TextInput
          label="Last Name"
          value={lastname}
          onChangeText={(lastname) => setLastName(lastname)}
          style={{ marginTop: 10, backgroundColor: "transparent" }}
        />
        <TextInput
          label="Work Email"
          value={email}
          onChangeText={(email) => setEmail(email)}
          style={{ marginTop: 10, backgroundColor: "transparent" }}
        />
        <Divider style={{ margin: 10 }} />
        <View>
          <Subheading>I'd like more information about: </Subheading>
          <Checkbox.Item
            status={checked ? "checked" : "unchecked"}
            onPress={() => setChecked(!checked)}
            label="Pro Free Agents"
            labelStyle={{ color: "#1f1f1f" }}
          />

          <Checkbox.Item
            status={checkedTwo ? "checked" : "unchecked"}
            onPress={() => setCheckedTwo(!checkedTwo)}
            label="D-League"
            labelStyle={{ color: "#1f1f1f" }}
          />

          <Checkbox.Item
            status={checkedThree ? "checked" : "unchecked"}
            onPress={() => setCheckedThree(!checkedThree)}
            label="Unsigned Talent"
            labelStyle={{ color: "#1f1f1f" }}
          />
          <Checkbox.Item
            status={checkedFour ? "checked" : "unchecked"}
            onPress={() => setCheckedFour(!checkedFour)}
            label="Private Workouts"
            labelStyle={{ color: "#1f1f1f" }}
          />
        </View>
        <View style={{ margin: 10 }}>
          <Button
            icon="send"
            onPress={() => {
              Alert.alert("Scout Pass Reqeust Uploaded");
            }}
            mode="outlined"
            color="black"
          >
            Send
          </Button>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inner: {
    flex: 1,
    margin: 10,
    paddingTop: 100,
  },
  intro: {
    flex: 1,
    margin: 10,
    paddingTop: 100,
  },
});
