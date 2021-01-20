import React from "react";
// react-navigation v5
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// expo icons
import { Octicons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

// Auth Context
import { AuthContext } from "./context";

// Auth Screens
import SignIn from "./Screens/AuthScreen/SignInScreen";
import SignUp from "./Screens/AuthScreen/SignUpScreen";
import OnboardingScreen from "./Screens/AuthScreen/OnBoardingScreens";
import Splash from "./Screens/AuthScreen/SplashScreen";
// main screens
import Home from "./Screens/HomeScreen";
import Channel from "./Screens/ChannelScreen";
import Library from "./Screens/LibraryScreen";
import Search from "./Screens/SearchScreen";
import VideoScreen from "./Screens/VideoScreen";
import { enableScreens } from "react-native-screens";
import CameraAction from "./Components/Camera";
import DstrktX from "./Screens/Channels/dstrktx";
import Modal from "./Screens/Modal/Modal";
import SkyClarkTv from "./Screens/Channels/skyclarktv";
enableScreens();

const Tabs = createBottomTabNavigator();
const AuthStack = createStackNavigator();
const HomeStack = createStackNavigator();
const ChannelsStack = createStackNavigator();
const LibraryStack = createStackNavigator();
const SearchStack = createStackNavigator();

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

const HomeStackScreen = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen
      name="Home"
      component={Home}
      options={{
        headerTransparent: true,
        headerTitle: null,
      }}
    />
  </HomeStack.Navigator>
);

const ChannelsStackScreen = ({ navigation, route }) => {
  if (route.state && route.state.index > 0) {
    navigation.setOptions({ tabBarVisible: false });
  } else {
    navigation.setOptions({ tabBarVisible: true });
  }
  return (
    <ChannelsStack.Navigator>
      <ChannelsStack.Screen
        name="Channel"
        component={Channel}
        options={{ headerTransparent: true, headerTitle: null }}
      />
      <ChannelsStack.Screen
        name="VideoScreen"
        component={VideoScreen}
        options={{
          headerTransparent: true,
          headerTitle: null,
          headerBackTitle: false,
        }}
      />
      <ChannelsStack.Screen
        name={"DstrktXScreen"}
        component={DstrktX}
        options={{
          headerTransparent: true,
          headerTitle: null,
          headerBackTitle: false,
        }}
      />
      <ChannelsStack.Screen
        name="SkyClarkTv"
        component={SkyClarkTv}
        options={{
          headerTransparent: true,
          headerTitle: null,
          headerBackTitle: false,
        }}
      />
    </ChannelsStack.Navigator>
  );
};

const LibraryStackScreen = () => (
  <LibraryStack.Navigator>
    <LibraryStack.Screen
      name="Library"
      component={Library}
      options={{ headerTransparent: true, headerTitle: null }}
    />
    <LibraryStack.Screen
      name="CameraAction"
      component={CameraAction}
      options={{
        headerTransparent: true,
        headerTitle: null,
        tabBarVisible: true,
      }}
    />
  </LibraryStack.Navigator>
);

const SearchStackScreen = () => (
  <SearchStack.Navigator>
    <SearchStack.Screen
      name="Search"
      component={Search}
      options={{ headerTransparent: true, headerTitle: null }}
    />
  </SearchStack.Navigator>
);

const TabsScreen = () => (
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
      showLabel="false"
      options={{
        // tabBarBadge: 4,
        tabBarLabel: "Watch Now",
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="play-circle-outline" size={size} color={color} />
        ),
      }}
    />
    <Tabs.Screen
      name="Channels"
      component={ChannelsStackScreen}
      options={{
        tabBarLabel: "Channels",
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="videocam-outline" size={size} color={color} />
        ),
      }}
    />
    <Tabs.Screen
      name="Library"
      component={LibraryStackScreen}
      showLabel={false}
      options={{
        tabBarLabel: "Watch Live",
        tabBarIcon: ({ color, size }) => (
          <MaterialIcons name="live-tv" size={size} color={color} />
        ),
      }}
    />
    <Tabs.Screen
      name="Search"
      component={SearchStackScreen}
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
    mode="modal"
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
    <RootStack.Screen
      name="Modal"
      component={Modal}
      options={{ animationEnabled: true, headerTitle: "Account" }}
    />
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
