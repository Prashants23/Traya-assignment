import React from "react";
import Animated, {
  SharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";
import IoniconsAnt from "@expo/vector-icons/AntDesign";

type Props = {
  progress: Readonly<SharedValue<0 | 1>>;
};

const Chevron = ({ progress }: Props) => {
  const iconStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: `${progress.value * -180}deg` }],
  }));
  return (
    <Animated.View style={iconStyle}>
      <IoniconsAnt name="down" size={15} color="black" />
    </Animated.View>
  );
};

export default Chevron;
