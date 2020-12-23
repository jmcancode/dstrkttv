import React from "react";
// react-navigation v5
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// react-native
import { StyleSheet, Text } from "react-native";
// expo icons
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
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
      name="STYLE BY JM"
      component={Home}
      options={{
        headerLeft: () => (
          <MaterialCommunityIcons
            name="account"
            size={24}
            color="black"
            style={{ paddingLeft: 320 }}
            onPress={() => navigation.navigate("Modal")}
          />
        ),

        headerRight: () => (
          <MaterialCommunityIcons
            name="briefcase-outline"
            size={24}
            color="black"
            style={{ paddingRight: 20 }}
            onPress={() => navigation.navigate("ShopModal")}
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
        } else if (route.name === "Shop") {
          iconName = focused ? "ios-list-box" : "ios-list";
        }
        return <AntDesign name="shoppingcart" size={size} color={color} />;
      },
    })}
    tabBarOptions={{
      activeTintColor: "#B53737",
      inactiveTintColor: "grey",
    }}
  >
    <Tabs.Screen
      name="Home"
      component={HomeStackScreen}
      options={{
        tabBarLabel: "Home",
        tabBarIcon: ({ color, size }) => (
          <AntDesign name="home" size={size} color={color} />
        ),
      }}
    />
    <Tabs.Screen
      name="Shop"
      component={ShopStackScreen}
      options={{
        tabBarLabel: "Shop",
        tabBarIcon: ({ color, size }) => (
          <Feather name="shopping-bag" size={size} color={color} />
        ),
      }}
    />
    <Tabs.Screen
      name="Discover"
      component={DiscoverStackScreen}
      options={{
        tabBarLabel: "Discover",
        tabBarIcon: ({ color, size }) => (
          <AntDesign name="bulb1" size={size} color={color} />
        ),
      }}
    />
    <Tabs.Screen
      name="Search"
      component={ProfileStackScreen}
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
