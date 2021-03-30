import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import SplashScreen from "../screens/SplashScreen";
import DashBoardNavigator from "./DashBoardNavigator";

const AppNavigator = () => {
  const isActivated = false;
  return (
    <NavigationContainer>
      {!isActivated && <SplashScreen />}
      {isActivated && <DashBoardNavigator />}
    </NavigationContainer>
  );
};

export default AppNavigator;
