import React from "react";
// react-navigation v5
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// expo icons
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
import Channel from "./Screens/ChannelScreen";
import Library from "./Screens/LibraryScreen";
import Search from "./Screens/SearchScreen";

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

const ChannelsStackScreen = () => (
  <ChannelsStack.Navigator>
    <ChannelsStack.Screen
      name="Channel"
      component={Channel}
      options={{ headerTransparent: true, headerTitle: null }}
    />
  </ChannelsStack.Navigator>
);

const LibraryStackScreen = () => (
  <LibraryStack.Navigator>
    <LibraryStack.Screen
      name="Library"
      component={Library}
      options={{ headerTransparent: true, headerTitle: null }}
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
        tabBarLabel: "Library",
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="library-outline" size={size} color={color} />
        ),
      }}
    />
    <Tabs.Screen
      name="Search"
      component={SearchStackScreen}
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
