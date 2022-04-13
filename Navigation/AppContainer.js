import * as React from "react";
import { MaterialCommunityIcons, MaterialIcons, FontAwesome } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "../Screens/Home/Container/HomeContainer";
import Cart from "../Screens/Cart/Container/CartContainer";
import Product from "../Screens/Product/Container/ProductContainer";
import Tracking from "../Screens/Tracking/Container/TrackingContainer";
import Profile from "../Screens/Profile/Container/ProfileContainer";

const Homestack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const MainStack = createNativeStackNavigator();

const HomestackScreens = () => (
  <Homestack.Navigator screenOptions={{ headerShown: false }}>
    <Homestack.Screen
      name="HomeMain"
      component={Home}
      options={{ headerLeft: null }}
    />
  </Homestack.Navigator>
);

const TabScreens = () => (
  <Tab.Navigator
    screenOptions={{
      headerShown: false,
      tabBarHideOnKeyboard: true,
      tabBarShowLabel: false,
      tabBarActiveTintColor: "#003A83",
      tabBarStyle: {
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
      },
    }}
  >
    <Tab.Screen
      name="Home"
      component={HomestackScreens}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="shopping" size={25} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Tracking"
      component={Tracking}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="map-marker" size={25} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Profile"
      component={Profile}
      options={{
        tabBarIcon: ({ color, size }) => (
          <FontAwesome name="user" size={25} color={color} />
        ),
      }}
    />
  </Tab.Navigator>
);

const AppContainer = () => (
  <NavigationContainer>
    <MainStack.Navigator
      screenOptions={{ headerShown: false }}
      headerMode="None"
    >
      <MainStack.Screen name="TabScreens" component={TabScreens} />
      <MainStack.Screen name="Cart" component={Cart} />
      <MainStack.Screen name="Product" component={Product} />
    </MainStack.Navigator>
  </NavigationContainer>
);

export default AppContainer;
