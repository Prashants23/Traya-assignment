import { Platform, StyleSheet } from "react-native";
import { initialWindowMetrics } from "react-native-safe-area-context";
import { scale } from "~/utils/scale.utils";

const bottomInset = initialWindowMetrics?.insets.bottom as number;

export const tabBarStyles = StyleSheet.create({
  tabBarStyle: {
    backgroundColor: "white",
    height: Platform.OS === "ios" ? bottomInset + scale(40) : scale(46),
    paddingTop: scale(10),
    borderTopColor: "black",
  },
  tabBarLabelStyle: {
    marginTop: scale(6),
    fontSize: scale(10),
    color: "black",
  },
  bold: {
    fontWeight: "700",
  },
});
