import React from "react";
import { View, StyleSheet, Text } from "react-native";

const SplashScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>This is Splash screen</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default SplashScreen;
