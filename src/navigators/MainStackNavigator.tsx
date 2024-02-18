import { enableScreens } from "react-native-screens";
import {
  NativeStackNavigationOptions,
  createNativeStackNavigator,
} from "@react-navigation/native-stack";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MainStackParams, MainTabStackParams } from "~/types/navigator.types";
import { CategoryPage } from "~/screens";
import {
  navigatorScreenOptions,
  profilePageOptions,
  TabBarIcon,
} from "./tabbar.config";
import { Profile } from "~/screens/Profile";
import VideoPlayer from "~/screens/Videos";
import MonthlyCarousal from "~/screens/Cart";

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
      <Tab.Screen name="Cart" component={MonthlyCarousal} />
      <Tab.Screen name="Videos" component={VideoPlayer} />
      <Tab.Screen name="You" component={Profile} options={profilePageOptions} />
    </Tab.Navigator>
  );
};

export default MainStackNavigator;
