import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Header from "~/components/header";
import { scale } from "~/utils/scale.utils";
import Ionicons from "@expo/vector-icons/Ionicons";
import IoniconsAnt from "@expo/vector-icons/AntDesign";
import Accordion from "~/components/accordian/Accordian";

const ProfilePageConfig = {
  categories: [
    {
      icon: "cube",
      title: "Order",
    },
    {
      icon: "calendar-clear-outline",
      title: "Log & Earn",
    },
    {
      icon: "pie-chart-outline",
      title: "Hair Progress",
    },
    {
      icon: "fast-food-outline",
      title: "Diet Plan",
    },
  ],
  other: [
    {
      type: "url",
      title: "Help & Support",
      icon: "chatbox",
      contentNested: null,
      next: "",
    },
    {
      type: "url",
      title: "Read More",
      icon: "document",
      contentNested: null,
      next: "",
    },
    {
      title: "Nested Accordion",
      icon: "document",
      contentNested: [
        {
          title: "Nested 1",
          url: "",
        },
        {
          title: "Nested 2",
          url: "",
        },
      ],
      type: "nested",
    },
    {
      type: "url",
      title: "Read More",
      icon: "document",
      contentNested: null,
      next: "",
    },
    {
      type: "url",
      title: "Read More",
      icon: "document",
      contentNested: null,
      next: "",
    },
  ],
};

export const Profile = () => {
  const { top: safeAreaTop } = useSafeAreaInsets();
  return (
    <ScrollView
      style={[
        styles.screen,
        {
          paddingTop: safeAreaTop,
        },
      ]}
    >
      <Header screenName="Profile" />
      <View style={styles.topSection}>
        <Ionicons
          name="alert-circle-sharp"
          size={50}
          color="#000"
          style={styles.icon}
        />
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Prashant Shukla</Text>
          <Text style={styles.subtitle}>Member since 20 days</Text>
        </View>

        {/* Replace 'ios-icon-name' with your icon name */}
      </View>

      {/* Another section below */}
      <View style={styles.bottomSection}>
        {ProfilePageConfig.categories.map(({ title, icon }) => (
          <View style={styles.categoryContainers}>
            <Ionicons name={icon} size={20} color="green" style={styles.icon} />
            <Text style={styles.titleCss}>{title}</Text>
          </View>
        ))}
      </View>
      <View style={styles.bottomSection}>
        {ProfilePageConfig.other.map(({ title, icon, type, contentNested }) =>
          type === "url" ? (
            <TouchableOpacity style={styles.otherCategory}>
              <Ionicons
                name={icon}
                size={20}
                color="green"
                style={styles.icon}
              />
              <Text style={styles.titleCss}>{title}</Text>
              <IoniconsAnt
                name={"right"}
                size={15}
                color="black"
                style={{ position: "absolute", right: 10 }}
              />
            </TouchableOpacity>
          ) : (
            // <></>
            <Accordion value={{ contentNested, title, icon }} type={type} />
          )
        )}
        <TouchableOpacity style={styles.logoutBtnCss}>
          <IoniconsAnt
            name={"logout"}
            size={20}
            color="black"
            style={{ position: "absolute", right: 40, top: 10 }}
          />
          <Text style={{}}>Logout</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "white",
  },
  container: {
    alignItems: "center",
    // padding: 20,
  },
  btnContainer: {
    backgroundColor: "white",
    padding: scale(20),
  },
  categoryContainers: {
    width: "48%",
    flexDirection: "row",
    backgroundColor: "white",
    // justifyContent: "",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "green",
    borderRadius: 20,
    elevation: 3,
    height: 70,
    marginVertical: 4,
  },

  otherCategory: {
    width: "100%",
    flexDirection: "row",
    backgroundColor: "white",
    // justifyContent: "",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "green",
    borderRadius: 10,
    elevation: 3,
    height: 50,
    marginVertical: 4,
  },

  item: {
    paddingHorizontal: scale(10),
    paddingVertical: scale(10),
  },
  titleCss: {
    marginLeft: 10,
  },

  topSection: {
    marginHorizontal: 20,
    marginVertical: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    borderWidth: 1,
    borderColor: "green",
    backgroundColor: "white",
    borderRadius: 20,
    elevation: 4,
  },
  titleContainer: {
    flex: 1,
    marginLeft: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 13,
    color: "#666",
  },
  icon: {
    marginLeft: 10,
  },
  bottomSection: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    padding: 10,
  },
  column: {
    flex: 1,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  part: {
    width: "45%", // Adjust as needed
    height: 100, // Adjust as needed
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ccc",
  },
  logoutBtnCss: {
    width: "100%",
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "red",
    alignItems: "center",
    paddingVertical: 10,
    marginVertical: 20,
    backgroundColor: "orange",
  },
});
