import React from "react";
import { View, StyleSheet, Text } from "react-native";

const UserScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>This is UserScreen</Text>
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

export default UserScreen;
