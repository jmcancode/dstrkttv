import React from "react";
// react-navigation v5
import {
  NavigationContainer,
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme,
  useTheme,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// react native paper
import {
  Provider as PaperProvider,
  DefaultTheme as PaperDefaultTheme,
  DarkTheme as PaperDarkTheme,
  Button,
} from "react-native-paper";
// react native
import { ActivityIndicator, Alert } from "react-native";

// expo icons
import { Octicons, Ionicons, SimpleLineIcons } from "@expo/vector-icons";

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
import JeffOsborne from "./Screens/Channels/jeffosborne";
import theRoyalGuard from "./Screens/Channels/theroyaguard";
import kaiSotto from "./Screens/Channels/kaisotto";
import MusicPlayer from "./Components/MusicPlayer";
import LearnMore from "./Screens/Channels/dstrkt_details";
import SelectWorkoutScreen from "./Screens/Channels/dstrktx_workout";
import SettingsScreen from "./Screens/Settings/UserSettings";
import VideoLibrary from "./Screens/Settings/VideoLibraryScreen";

import ScoutPassScreen from "./Screens/Settings/ScoutPassScreen";

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

const ChannelsStackScreen = ({ navigation, route, colors }) => {
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
        name={"SelectWorkout"}
        component={SelectWorkoutScreen}
        options={{
          headerTransparent: true,
          headerTitle: null,
          headerBackTitle: null,
          headerBackAccessibilityLabel: null,
        }}
      />
      <ChannelsStack.Screen
        name={"Learn More"}
        component={LearnMore}
        options={{
          headerTransparent: true,
          headerTitle: null,
          headerBackTitle: "",
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
      <ChannelsStack.Screen
        name="JeffO"
        component={JeffOsborne}
        options={{
          headerTransparent: true,
          headerTitle: null,
          headerBackTitle: null,
          headerBackAccessibilityLabel: null,
        }}
      />
      <ChannelsStack.Screen
        name="theRoyalGuard"
        component={theRoyalGuard}
        options={{
          headerTransparent: true,
          headerTitle: null,
          headerBackTitle: null,
          headerBackAccessibilityLabel: null,
        }}
      />
      <ChannelsStack.Screen
        name="KaiSotto"
        component={kaiSotto}
        options={{
          headerTransparent: true,
          headerTitle: null,
          headerBackTitle: null,
          headerBackAccessibilityLabel: null,
        }}
      />
      <ChannelsStack.Screen
        name="musicPlayer"
        component={MusicPlayer}
        options={{
          headerTransparent: true,
          headerTitle: null,
          headerBackTitle: null,
          headerBackAccessibilityLabel: false,
          headerRight: null,
          headerLeft: null,
        }}
      />
    </ChannelsStack.Navigator>
  );
};

const LibraryStackScreen = ({ navigation, route }) => {
  if (route.state && route.state.index > 0) {
    navigation.setOptions({ tabBarVisible: false });
  } else {
    navigation.setOptions({ tabBarVisible: true });
  }

  return (
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
          headerBackTitle: null,
          headerTruncatedBackTitle: true,
          headerBackAccessibilityLabel: null,
          headerLeft: null,
          gestureEnabled: false,
        }}
      />
    </LibraryStack.Navigator>
  );
};

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
      activeTintColor: "#e4bd7a",
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
        tabBarLabel: "Labs",
        tabBarIcon: ({ color, size }) => (
          <SimpleLineIcons name="chemistry" size={size} color={color} />
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
      options={{ animationEnabled: true }}
    />
    <RootStack.Screen
      name="SettingsScreen"
      component={SettingsScreen}
      options={{ animationEnabled: true, headerBackTitle: "back to settings" }}
    />
    <RootStack.Screen
      name="VideoLib"
      component={VideoLibrary}
      options={{ animationEnabled: true }}
    />
    <RootStack.Screen
      name="ScoutPass"
      component={ScoutPassScreen}
      options={{ animationEnabled: true }}
    />
  </RootStack.Navigator>
);

export default () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [userToken, setUserToken] = React.useState(null);
  const [isDarkTheme, setIsDarkTheme] = React.useState(false);

  const CustomDefaultTheme = {
    ...NavigationDefaultTheme,
    ...PaperDefaultTheme,
    colors: {
      ...NavigationDefaultTheme.colors,
      ...PaperDefaultTheme.colors,
      background: "#ffffff",
      backdrop: "#ffffff",
      text: "#333333",
      placeholder: "#333333",
    },
  };

  const CustomDarkTheme = {
    ...NavigationDarkTheme,
    ...PaperDarkTheme,
    dark: true,
    colors: {
      ...NavigationDarkTheme.colors,
      ...PaperDarkTheme.colors,
      background: "#333333",
      backdrop: "#333333",
      text: "#ffffff",
      placeholder: "#ffffff",
    },
  };

  const theme = isDarkTheme ? CustomDarkTheme : CustomDefaultTheme;

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
      toggleTheme: () => {
        setIsDarkTheme((isDarkTheme) => !isDarkTheme);
      },
    };
  }, []);

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return <ActivityIndicator />;
  }

  return (
    <PaperProvider theme={theme}>
      <AuthContext.Provider value={authContext}>
        <NavigationContainer theme={theme}>
          <RootStackScreen userToken={userToken} />
        </NavigationContainer>
      </AuthContext.Provider>
    </PaperProvider>
  );
};
