import { FlashList } from "@shopify/flash-list";
import React from "react";
import { View, Text, RefreshControl } from "react-native";
import { createStyleSheet } from "react-native-unistyles";
import useHomeConfig from "~/hooks/HomePage/useHomeConfig";

// const renderItem = ({ item }) => (
//   <View style={{ padding: 10 }}>
//     <Text>{item.title}</Text>
//     <Text>{item.completed ? "Completed" : "Not Completed"}</Text>
//   </View>
// );
const styles = createStyleSheet({
  cardContainer: {
    backgroundColor: "#fff",
    padding: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  completed: {
    color: "green",
  },
  notCompleted: {
    color: "red",
  },
});

const renderItem = ({ item }) => {
  const { title, completed } = item;
  return (
    <View style={styles.cardContainer}>
      <Text style={styles.title}>{title}</Text>
      <Text style={completed ? styles.completed : styles.notCompleted}>
        {completed ? "Completed" : "Not Completed"}
      </Text>
    </View>
  );
};

const HomePage = () => {
  const {
    data: config,
    isLoading,
    isRefetching,
    isError,
    refetch,
  } = useHomeConfig();

  const onRefresh = () => {
    refetch();
  };

  return (
    <View style={{ flex: 1 }}>
      {isLoading ? (
        <Text>Loading...</Text>
      ) : isError ? (
        <Text>Error occurred while fetching data</Text>
      ) : (
        <FlashList
          data={config}
          renderItem={renderItem}
          estimatedItemSize={200}
          keyExtractor={(item) => item.id.toString()}
          refreshControl={
            <RefreshControl refreshing={isRefetching} onRefresh={onRefresh} />
          }
        />
      )}
    </View>
  );
};

export default HomePage;
