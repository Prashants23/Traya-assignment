import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

import Ionicons from "@expo/vector-icons/Ionicons";
import IoniconsAnt from "@expo/vector-icons/AntDesign";
import Animated, {
  useAnimatedRef,
  useSharedValue,
  useAnimatedStyle,
  runOnUI,
  measure,
  useDerivedValue,
  withTiming,
} from "react-native-reanimated";
import Chevron from "./Chevron";

export type Category = {
  title: string;
  contentNested: NestedItem[];
  type?: string;
  icon: string;
};

export type NestedItem = {
  title: string;
};

type Props = {
  value: Category;
  type: string;
};

const Accordion = ({ value, type }: Props) => {
  const listRef = useAnimatedRef();
  const heightValue = useSharedValue(0);
  const open = useSharedValue(false);
  const progress = useDerivedValue(() =>
    open.value ? withTiming(1) : withTiming(0)
  );

  const heightAnimationStyle = useAnimatedStyle(() => ({
    height: heightValue.value,
  }));

  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => {
          if (heightValue.value === 0) {
            runOnUI(() => {
              "worklet";
              heightValue.value = withTiming(measure(listRef)!.height);
            })();
          } else {
            heightValue.value = withTiming(0);
          }
          open.value = !open.value;
        }}
        style={styles.titleContainer}
      >
        <Ionicons
          name={value.icon}
          size={20}
          color="green"
          style={styles.icon}
        />
        <Text style={styles.textTitle}>{value.title}</Text>
        <View style={{ position: "absolute", right: 15 }}>
          <Chevron progress={progress} />
        </View>
      </Pressable>
      <Animated.View style={heightAnimationStyle}>
        <Animated.View style={styles.contentContainer} ref={listRef}>
          {type === "nested" && (
            <>
              {value.contentNested.map(({ title }) => {
                return (
                  <TouchableOpacity style={styles.otherCategory}>
                    <Ionicons
                      name={value.icon}
                      size={20}
                      color="green"
                      style={styles.icon}
                    />
                    <Text style={styles.titleCss}>{title}</Text>
                    <IoniconsAnt
                      name={"right"}
                      size={15}
                      color="black"
                      style={{ position: "absolute", right: 0 }}
                    />
                  </TouchableOpacity>
                );
              })}
            </>
          )}
        </Animated.View>
      </Animated.View>
    </View>
  );
};

export default Accordion;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    marginHorizontal: 10,
    marginVertical: 5,
    width: "100%",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "green",
    overflow: "hidden",
    elevation: 3,
  },
  textTitle: {
    fontSize: 13,
    color: "black",
    marginLeft: 10,
  },
  titleContainer: {
    height: 50,
    flexDirection: "row",
    alignItems: "center",
  },
  contentContainer: {
    position: "absolute",
    width: "100%",
    top: 0,
  },
  content: {
    padding: 20,
    backgroundColor: "#D6E1F0",
  },
  textContent: {
    fontSize: 1,
    color: "black",
  },
  icon: {
    marginLeft: 10,
  },
  titleCss: {
    marginLeft: 10,
  },
  otherCategory: {
    width: "90%",
    marginLeft: 20,
    flexDirection: "row",
    backgroundColor: "white",
    alignItems: "center",
    borderColor: "green",
    borderRadius: 10,
    height: 50,
    marginVertical: 4,
  },
});
