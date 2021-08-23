import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";

import InScreen from "./screens/InScreen";
import FbScreen from "./screens/FbScreen";

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const Navigator = createBottomNavigator({
  Fb: { screen: FbScreen },
  In: { screen: InScreen }
});

const AppContainer = createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center"
  }
});
