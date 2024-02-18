import { useMemo } from "react";
import { StyleProp, View, ViewStyle } from "react-native";
import Animated, {
  Extrapolation,
  SharedValue,
  interpolate,
  interpolateColor,
  useAnimatedStyle,
} from "react-native-reanimated";
import { StyleSheet } from "react-native";

type PaginationItemProps = {
  progressValue?: SharedValue<number>;
  inactiveColor?: string;
  activeColor?: string;
  dotSize?: number;
  dotStyle?: StyleProp<ViewStyle>;
  index: number;
  length: number;
  expandedDotSize?: number;
};

const PaginationItem = ({
  progressValue,
  index,
  length,
  inactiveColor,
  activeColor,
  dotStyle,
  dotSize = 10,
  expandedDotSize,
}: PaginationItemProps) => {
  const animatedStyles = useAnimatedStyle(() => {
    let inputRange = [index - 1, index, index + 1];
    let outputRange = [dotSize, expandedDotSize, dotSize];

    if (index === 0 && progressValue?.value > length - 1) {
      inputRange = [length - 1, length, length + 1];
      outputRange = [dotSize, expandedDotSize, dotSize];
    }

    return {
      width: interpolate(
        progressValue?.value,
        inputRange,
        outputRange,
        Extrapolation.CLAMP
      ),
      backgroundColor: interpolateColor(progressValue?.value, inputRange, [
        inactiveColor,
        activeColor,
        inactiveColor,
      ]),
    };
  }, [progressValue, index, length]);

  return (
    <Animated.View
      style={[
        styles.dot,
        { width: dotSize, height: dotSize, borderRadius: dotSize / 2 },
        animatedStyles,
        dotStyle,
      ]}
    />
  );
};

type PaginationProps = {
  length: number;
  progressValue?: SharedValue<number>;
  inactiveColor?: string;
  activeColor?: string;
  dotSize?: number;
  dotStyle?: StyleProp<ViewStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  expandedDotSize?: number;
};

const Pagination = ({
  length,
  progressValue,
  inactiveColor = "#707070",
  activeColor = "#707070",
  dotSize = 10,
  dotStyle,
  containerStyle,
  expandedDotSize = 42,
}: PaginationProps) => {
  const paginationDots = useMemo(() => [...Array(length).keys()], [length]);

  return (
    <View
      pointerEvents="box-none"
      style={[styles.defaultContainerStyle, containerStyle]}
    >
      {paginationDots.map((_: any, index: number) => (
        <PaginationItem
          key={index.toString()}
          progressValue={progressValue}
          index={index}
          length={length}
          inactiveColor={inactiveColor}
          activeColor={activeColor}
          dotStyle={dotStyle}
          dotSize={dotSize}
          expandedDotSize={expandedDotSize}
        />
      ))}
    </View>
  );
};

export default Pagination;

const styles = StyleSheet.create({
  defaultContainerStyle: {
    flexDirection: "row",
    gap: 4,
    backgroundColor: "red",
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
  },
});
