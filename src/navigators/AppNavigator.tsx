import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";
import { StyleSheet, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";

import MainStackNavigator from "./MainStackNavigator";
import { navigationRef } from "~/utils/navigator.utils";

SplashScreen.preventAutoHideAsync();

const AppNavigator = () => {
  SplashScreen.hideAsync();
  return (
    <View style={styles.container}>
      <NavigationContainer ref={navigationRef}>
        <MainStackNavigator />
      </NavigationContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
});
export default AppNavigator;
