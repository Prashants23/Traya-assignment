import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { ViewStyle, TextStyle } from "react-native";

import Ionicons from "@expo/vector-icons/Ionicons";
import { scale } from "~/utils/scale.utils";

/**
 * The props for the Header component.
 */
interface HeaderProps {
  /**
   * A function that will be called when the back button is pressed.
   */
  onPressBack?: () => void;
  /**
   * The name of the screen to display in the header.
   */
  screenName?: string;
  transparent?: boolean;
  overrideStyles?: {
    container?: ViewStyle;
    title?: TextStyle;
  };
}

const Header = ({
  onPressBack,
  screenName,
  transparent,
  overrideStyles,
}: HeaderProps) => {
  const navigation = useNavigation();

  // If any override backPress function is passed, use that, otherwise use the default back handler
  const backHandler = () => {
    if (typeof onPressBack === "function") {
      onPressBack();
      return;
    }
    navigation.goBack();
  };
  return (
    <View
      style={[
        styles.container,
        // eslint-disable-next-line react-native/no-inline-styles
        {
          backgroundColor: transparent ? "transparent" : "#FFFFFF",
          borderBottomWidth: transparent ? 0 : 1,
        },
        overrideStyles?.container,
      ]}
    >
      <TouchableOpacity
        onPress={backHandler}
        hitSlop={{
          top: 10,
          bottom: 10,
          left: 10,
          right: 10,
        }}
      >
        <Ionicons name="arrow-back" size={32} color="black" />
      </TouchableOpacity>
      <Text style={styles.title}>{screenName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: scale(48),
    paddingHorizontal: scale(20),
    alignItems: "center",
    flexDirection: "row",
    borderBottomColor: "#EEEEEE",
    borderBottomWidth: 1,
  } as ViewStyle,

  title: {
    marginLeft: scale(12),
    fontWeight: "bold",
    fontSize: scale(20),
    color: "black",
    width: scale(190),
  } as TextStyle,
});

export default Header;
