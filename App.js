import React from "react";
// react-navigation v5
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// react-native
import { StyleSheet, Text } from "react-native";
// expo icons
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
// Auth Context
import { AuthContext } from "./context";
// Auth Screens
import SignIn from "./Screens/AuthScreen/SignInScreen";
import SignUp from "./Screens/AuthScreen/SignUpScreen";
import OnboardingScreen from "./Screens/AuthScreen/OnBoardingScreens";
import Splash from "./Screens/AuthScreen/SplashScreen";
// main screens
import Home from "./Screens/HomeScreen";

const Tabs = createBottomTabNavigator();
const AuthStack = createStackNavigator();
const HomeStack = createStackNavigator();

const styles = StyleSheet.create({
  image: {
    width: 25,
    height: 25,
    marginLeft: 15,
    marginBottom: 15,
  },
});

const AuthStackScreen = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen
      name="OnBoarding"
      component={OnboardingScreen}
      options={{ headerTransparent: true, headerTitle: null }}
    />
    <AuthStack.Screen
      name="SignIn"
      component={SignIn}
      options={{
        headerTransparent: true,
        headerTitle: null,
      }}
    />
    <AuthStack.Screen
      name="SignUp"
      component={SignUp}
      options={{
        headerTransparent: true,
        headerTitle: null,
      }}
    />
  </AuthStack.Navigator>
);

const HomeStackScreen = ({ navigation }) => (
  <HomeStack.Navigator>
    <HomeStack.Screen
      name="Home"
      component={Home}
      options={{
        headerTransparent: true,
        headerTitle: "DSTRKT TV",
        headerRight: () => (
          <MaterialCommunityIcons
            name="account"
            size={24}
            color="black"
            style={{ paddingRight: 20 }}
            onPress={() => alert("account button")}
          />
        ),
      }}
    />
  </HomeStack.Navigator>
);

const TabsScreen = ({ navigation }) => (
  <Tabs.Navigator
    initialRouteName="Home"
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === "Home") {
          iconName = focused
            ? "ios-information-circle"
            : "ios-information-circle-outline";
        } else if (route.name === "Channels") {
          iconName = focused ? "ios-list-box" : "ios-list";
        }
        return <Ionicons name="videocam-outline" size={size} color={color} />;
      },
    })}
    tabBarOptions={{
      activeTintColor: "#d7b546",
      inactiveTintColor: "#777",
    }}
  >
    <Tabs.Screen
      name="Home"
      component={HomeStackScreen}
      headerMode="none"
      options={{
        tabBarLabel: "Home",
        tabBarIcon: ({ color, size }) => (
          <AntDesign name="home" size={size} color={color} />
        ),
      }}
    />
    <Tabs.Screen
      name="Channels"
      component={HomeStackScreen}
      options={{
        tabBarLabel: "Channels",
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="videocam-outline" size={size} color={color} />
        ),
      }}
    />
    <Tabs.Screen
      name="Discover"
      component={HomeStackScreen}
      options={{
        tabBarLabel: "Watch Live",
        tabBarIcon: ({ color, size }) => (
          <MaterialIcons name="live-tv" size={size} color={color} />
        ),
      }}
    />
    <Tabs.Screen
      name="Search"
      component={HomeStackScreen}
      onPress={() => navigation.toggleDrawer()}
      options={{
        tabBarLabel: "Search",
        tabBarIcon: ({ color, size }) => (
          <Octicons name="search" size={size} color={color} />
        ),
      }}
    />
  </Tabs.Navigator>
);

const RootStack = createStackNavigator();
const RootStackScreen = ({ userToken }) => (
  <RootStack.Navigator
    headerMode="none"
    screenOptions={{ animationEnabled: false }}
    // mode="modal"
  >
    {userToken ? (
      <RootStack.Screen
        name="App"
        component={TabsScreen}
        options={{
          animationEnabled: false,
        }}
      />
    ) : (
      <RootStack.Screen
        name="Auth"
        component={AuthStackScreen}
        options={{
          animationEnabled: false,
        }}
      />
    )}
  </RootStack.Navigator>
);

export default () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [userToken, setUserToken] = React.useState(null);

  const authContext = React.useMemo(() => {
    return {
      signIn: () => {
        setIsLoading(false);
        setUserToken("asdf");
      },
      signUp: () => {
        setIsLoading(false);
        setUserToken("asdf");
      },
      signOut: () => {
        setIsLoading(false);
        setUserToken(null);
      },
    };
  }, []);

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return <Splash />;
  }

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <RootStackScreen userToken={userToken} />
      </NavigationContainer>
    </AuthContext.Provider>
  );
};
