import * as React from "react";
import {
  View,
  ScrollView,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  Alert,
  FlatList,
  StatusBar,
} from "react-native";
// react-native-paper
import {
  Modal,
  Portal,
  Text,
  Button,
  Provider,
  TextInput,
  Divider,
} from "react-native-paper";
// @freakycoder custom apple header
import { AppleHeader } from "@freakycoder/react-native-header-view";
//Custom compoents
import VideoSlider from "../Components/VideoSlider";

// expo icons packages
import { AntDesign } from "@expo/vector-icons";

const { width, height } = Dimensions.get("screen");

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "Recorded Video",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Recorded Video",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Recorded Video",
  },
];
const Item = ({ title }) => (
  <View style={styles.item}>
    <Text adjustsFontSizeToFit numberOfLines={1} style={styles.prevtitle}>
      {title}
    </Text>
  </View>
);

const Separator = () => <View style={styles.separator} />;

export default function Library({ navigation }) {
  const renderItem = ({ item }) => <Item title={item.title} />;
  const [visible, setVisible] = React.useState(false);
  const [text, setText] = React.useState("");
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {
    backgroundColor: "#f5f5f5",
    padding: 20,
    height: "50%",
    margin: 10,
  };
  return (
    <>
      <ScrollView>
        <Provider>
          <StatusBar hidden />
          <View style={styles.container}>
            <View style={styles.applehead}>
              <AppleHeader
                dateTitle={null}
                largeTitle="Live"
                onPress={() => alert("This will be an account modal")}
              />
              <Separator />
            </View>
            <View
              style={{
                flex: 1,
                width: "100%",
                padding: 5,
                height: 250,
                backgroundColor: "#1f1f1f",
              }}
            >
              <View style={styles.camera}>
                <AntDesign
                  name="camerao"
                  size={24}
                  color="#fff"
                  onPress={() => {
                    navigation.navigate("CameraAction");
                  }}
                />
                <Button
                  title="Start a Live Video"
                  onPress={() => {
                    navigation.navigate("CameraAction");
                  }}
                  color="#fff"
                />
              </View>
            </View>
          </View>
          <View>
            <Text adjustsFontSizeToFit numberOfLines={1} style={styles.title}>
              LIVE TITLE
            </Text>
            <Text
              style={styles.subtitle}
              adjustsFontSizeToFit
              numberOfLines={1}
            >
              Brought to you by SPONSOR NAME
            </Text>
            <View>
              <Text style={styles.paragraph} adjustsFontSizeToFit>
                This is a description of the live content. Users will have the
                oportunity to watch up to 60 secs of th video before signing up
                & paying a subscription. Proin eget tortor risus. Quisque velit
                nisi, pretium ut lacinia in, elementum id enim. Curabitur arcu
                erat, accumsan id imperdiet et, porttitor at sem. Proin eget
                tortor risus. Quisque velit nisi, pretium ut lacinia in,
                elementum id enim.
              </Text>
            </View>
            <View style={styles.button}>
              <Button
                mode="text"
                // color="#1f1f1f"
                onPress={() => {
                  Alert.alert("Video Saved");
                }}
              >
                Watch Later
              </Button>
              <Button
                mode="text"
                // color="#1f1f1f"
                onPress={showModal}
              >
                Scout Pass
              </Button>
            </View>
          </View>
          <Separator />
          <View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Text
                style={styles.seewhatyoumissed}
                adjustsFontSizeToFit
                numberOfLines={1}
              >
                see what you missed
              </Text>
              <Button
                mode="text"
                // color="#000"
                onPress={() => Alert.alert("Video Library")}
                style={{ paddingRight: 5 }}
              >
                see all
              </Button>
            </View>
            <View style={{ flex: 1, width: width }}>
              <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={DATA}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                style={{ borderRadius: 5 }}
              />
            </View>

            <View>
              <Portal>
                <Modal
                  visible={visible}
                  onDismiss={hideModal}
                  contentContainerStyle={containerStyle}
                >
                  <Text
                    adjustsFontSizeToFit
                    numberOfLines={3}
                    style={{ textAlign: "center" }}
                  >
                    This is where scouts can submit their request for access or
                    purchase a subscription based pass. Access pass includes
                    player stats and the ability to request meeting with the
                    player.
                  </Text>
                  <View style={{ margin: 5 }}>
                    <TextInput
                      label="Full Name"
                      type="Outlined"
                      value={text}
                      onChange={(text) => setText(text)}
                      style={{ backgroundColor: "transparent" }}
                    />
                    <TextInput
                      label="Company Email"
                      type="Outlined"
                      value={text}
                      onChange={(text) => setText(text)}
                      style={{ backgroundColor: "transparent" }}
                    />
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      paddingTop: 15,
                    }}
                  >
                    <Button
                      mode="outlined"
                      compact={true}
                      accessibilityLabel="subscribe to a scout"
                      onPress={() => Alert.alert("Your subscribed!")}
                    >
                      SubScription
                    </Button>

                    <Button
                      mode="outlined"
                      compact={true}
                      accessibilityLabel="subscribe to a scout"
                      onPress={() => Alert.alert("Day Pass granted!")}
                    >
                      Day Pass
                    </Button>
                  </View>
                  <View>
                    <Text
                      adjustsFontSizeToFit
                      numberOfLines={1}
                      style={{
                        flex: 1,
                        position: "absolute",
                        paddingTop: 5,
                        fontSize: 10,
                        paddingLeft: 270,
                        color: "#777",
                      }}
                    >
                      $55.00 / per practice
                    </Text>
                    <Text
                      adjustsFontSizeToFit
                      numberOfLines={1}
                      style={{
                        flex: 1,
                        position: "absolute",
                        paddingTop: 5,
                        fontSize: 10,
                        paddingLeft: 10,
                        color: "#777",
                      }}
                    >
                      $4.99 / Month
                    </Text>
                  </View>
                </Modal>
              </Portal>
            </View>
          </View>
        </Provider>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    width: "98%",
    margin: 5,
  },
  applehead: {
    flex: 1,
    paddingTop: 40,
    width: width,
  },
  firstlist: {
    flex: 1,
    position: "absolute",
    fontSize: 12,
    fontWeight: "200",
    marginLeft: 10,
  },
  camera: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 90,
  },
  title: {
    fontSize: 36,
    fontWeight: "700",
    paddingTop: 5,
    paddingLeft: 10,
  },
  prevtitle: {
    fontSize: 36,
    fontWeight: "700",
    paddingTop: 5,
    paddingLeft: 10,
    color: "#fff",
  },
  paragraph: {
    fontSize: 12,
    fontWeight: "100",
    color: "#777",
    padding: 10,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "200",
    color: "#d7b546",
    paddingLeft: 10,
  },
  seewhatyoumissed: {
    fontSize: 21,
    textTransform: "uppercase",
    fontWeight: "700",
    paddingTop: 5,
    paddingLeft: 10,
  },
  button: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    paddingTop: 2,
    paddingBottom: 10,
  },
  item: {
    backgroundColor: "#1f1f1f",
    padding: 80,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 5,
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
