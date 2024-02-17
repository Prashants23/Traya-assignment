import { enableScreens } from "react-native-screens";
import {
  NativeStackNavigationOptions,
  createNativeStackNavigator,
} from "@react-navigation/native-stack";
import { MainStackParams } from "~/types/navigator.types";
import { CategoryPage } from "~/screens";

const MainStack = createNativeStackNavigator<MainStackParams>();

const MAIN_STACK_SCREEN_OPTIONS: NativeStackNavigationOptions = {
  headerShown: true,
  animation: "slide_from_right",
};
enableScreens(true);
const MainStackNavigator = () => {
  return (
    <MainStack.Navigator screenOptions={MAIN_STACK_SCREEN_OPTIONS}>
      <MainStack.Screen name="CategoryPage" component={CategoryPage} />
    </MainStack.Navigator>
  );
};

export default MainStackNavigator;
