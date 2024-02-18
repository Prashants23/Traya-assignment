const home_unselected = require("./icons/home_unselected.svg");
const home_selected = require("./icons/home_selected.svg");
const profile = require("./icons/profile.svg");
const profileSelected = require("./icons/profileSelected.svg");
const Video = require("./icons/videoIcon.svg");
const Video_selected = require("./icons/videoIcon_selected.svg");
const Cart_selected = require("./icons/cart_selected.svg");
const Cart = require("./icons/cart.svg");

import { Image } from "expo-image";
import { Text } from "react-native";
import { tabBarStyles } from "./tabbasr.styles";
const TAB_TO_ICON_MAPPING = {
  Home: {
    selected: home_selected,
    unselected: home_unselected,
  },
  You: {
    selected: profileSelected,
    unselected: profile,
  },
  Videos: {
    selected: Video_selected,
    unselected: Video,
  },
  Cart: {
    selected: Cart_selected,
    unselected: Cart,
  },
};

export const TabBarIcon = ({
  route,
  focused,
}: {
  route: string;
  focused: boolean;
}) => {
  const ActiveTabIcon =
    TAB_TO_ICON_MAPPING[route as keyof typeof TAB_TO_ICON_MAPPING][
      focused ? "selected" : "unselected"
    ];
  return (
    <>
      <Image
        source={ActiveTabIcon}
        style={[{ aspectRatio: 11 / 12, width: 20 }]}
      />
    </>
  );
};

export const profilePageOptions = {
  // headerStyle: styles.callAndHistoryHeaderStyle,
  headerShown: false,
};

const tabBarLabel = ({
  children: label,
  focused,
}: {
  children: string;
  focused: boolean;
}) => (
  <Text style={[tabBarStyles.tabBarLabelStyle, focused && tabBarStyles.bold]}>
    {label}
  </Text>
);

export const navigatorScreenOptions = {
  tabBarLabel,
  tabBarStyle: tabBarStyles.tabBarStyle,
  // headerTitle: "",
};
