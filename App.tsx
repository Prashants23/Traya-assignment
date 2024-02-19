// import { QueryClientProvider } from "@tanstack/react-query";
import { StatusBar } from "expo-status-bar";
import { AppState, StyleSheet } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import AppNavigator from "~/navigators/AppNavigator";
import QueryClientProvider from "~/providers/QueryClientProvider";
import "~/utils/unistyles.utils";

export default function App() {
  return (
    <GestureHandlerRootView style={styles.gestureHandlerRootView}>
      <SafeAreaProvider>
        <QueryClientProvider>
          <StatusBar style="dark" />
          <AppNavigator />
        </QueryClientProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  gestureHandlerRootView: {
    flex: 1,
  },
});
