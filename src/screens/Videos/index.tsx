import React, { useState } from "react";
import { StyleSheet, View, Button, Text } from "react-native";
import { Video } from "expo-av";

const VideoPlayer = () => {
  const [videoStatus, setVideoStatus] = useState({});
  const videoRef = React.useRef(null);

  const handlePlayPause = () => {
    if (videoStatus.isPlaying) {
      videoRef.current.pauseAsync();
    } else {
      videoRef.current.playAsync();
    }
  };

  const handleVideoStatusUpdate = (status) => {
    setVideoStatus(status);
  };

  return (
    <View style={styles.container}>
      <Video
        ref={videoRef}
        source={{
          uri: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        }}
        style={styles.video}
        onPlaybackStatusUpdate={handleVideoStatusUpdate}
      />
      {/* <View style={styles.controlsContainer}>
        <Button
          title={videoStatus.isPlaying ? 'Pause' : 'Play'}
          onPress={handlePlayPause}
        />
        <Text>{videoStatus.durationMillis}ms</Text>
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  video: {
    width: "100%",
    height: 300,
  },
  controlsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 10,
  },
});

export default VideoPlayer;
