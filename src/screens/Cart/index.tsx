import { Image } from "expo-image";
import { useSharedValue } from "react-native-reanimated";
import Carousel from "react-native-reanimated-carousel";
import { useStyles } from "react-native-unistyles";

import { createStyleSheet } from "react-native-unistyles";
import { Text, View } from "react-native";
import Pagination from "~/components/Pagination";

const stylesheet = createStyleSheet(({ utils, colors }) => ({
  imageDesc: {
    textAlign: "center",
    fontSize: utils.scale(14),
    marginTop: utils.scale(16),
  },
  paginationDotStyle: { borderColor: "black", borderWidth: 1 },
  paginationContainerStyle: { alignSelf: "center" },
  carousalStyle: { alignSelf: "center", backgroundColor: "#ff3388" },
  title: { fontSize: 20, fontWeight: "bold", marginTop: 20 },
}));

export const CAROUSAL_DATA = [
  {
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  },
  {
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  },
  {
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  },
  {
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  },
  {
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  },
];

export default function MonthlyCarousal({}: {
  carouselHeight: number;
  carouselWidth: number;
  imageHeight: number;
  imageWidth: number;
  gender: "male" | "female";
}) {
  const {
    styles,
    theme: { colors },
  } = useStyles(stylesheet);
  const progressValue = useSharedValue(0);
  return (
    <View>
      <Text style={styles.title}>Your Monthly Goals</Text>
      <Carousel
        width={350}
        loop={false}
        // height={200}
        pagingEnabled
        data={CAROUSAL_DATA}
        renderItem={({ item: { desc } }) => (
          <View style={styles.carousalStyle}>
            <Text style={styles.imageDesc}>{desc}</Text>
          </View>
        )}
        onProgressChange={(_, progress) => (progressValue.value = progress)}
      />
      {/* <Pagination
        length={CAROUSAL_DATA.length}
        containerStyle={styles.paginationContainerStyle}
        progressValue={progressValue}
        activeColor={"black"}
        expandedDotSize={10}
        dotSize={10}
        dotStyle={styles.paginationDotStyle}
        inactiveColor="#fff"
      /> */}
    </View>
  );
}
