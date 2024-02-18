import { enableScreens } from "react-native-screens";
import {
  NativeStackNavigationOptions,
  createNativeStackNavigator,
} from "@react-navigation/native-stack";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MainStackParams, MainTabStackParams } from "~/types/navigator.types";
import { CategoryPage } from "~/screens";
import { navigatorScreenOptions, TabBarIcon } from "./tabbar.config";

const MainStack = createNativeStackNavigator<MainStackParams>();

const Tab = createBottomTabNavigator<MainTabStackParams>();

const MAIN_STACK_SCREEN_OPTIONS: NativeStackNavigationOptions = {
  headerShown: true,
  animation: "slide_from_right",
};
enableScreens(true);
const MainStackNavigator = () => {
  return (
    // <MainStack.Navigator screenOptions={MAIN_STACK_SCREEN_OPTIONS}>
    //   <MainStack.Screen name="CategoryPage" component={CategoryPage} />
    // </MainStack.Navigator>
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => (
          <TabBarIcon route={route.name} focused={focused} />
        ),
        ...navigatorScreenOptions,
      })}
      initialRouteName="Home"
    >
      <Tab.Screen name="Home" component={CategoryPage} />
      <Tab.Screen name="Cart" component={CategoryPage} />
      <Tab.Screen name="Videos" component={CategoryPage} />
      <Tab.Screen name="You" component={CategoryPage} />
    </Tab.Navigator>
  );
};

export default MainStackNavigator;
