import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { Searchbar } from "react-native-paper";
import { StatusBar, StyleSheet, SafeAreaView, Text, View } from "react-native";
import { RestaurantsScreen } from "./src/features/restaurants/screens/restaurant.screen";
export default function App() {
  // const [searchQuery, setSearchQuery] = React.useState("");

  // const onChangeSearch = (query) => setSearchQuery(query);
  return (
    <>
      <RestaurantsScreen />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  search: {
    padding: 16,
    backgroundColor: "white",
  },
  list: {
    flex: 1,
    padding: 16,
    backgroundColor: "blue",
  },
});
