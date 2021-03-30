import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AddScreen from "../screens/AddScreen";
import HomeScreen from "../screens/HomeScreen";
import UserScreen from "../screens/UserScreen";

const Tab = createBottomTabNavigator();
const DashBoardNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name="HomeScreen" component={HomeScreen} />
    <Tab.Screen name="AddScreen" component={AddScreen} />
    <Tab.Screen name="UserScreen" component={UserScreen} />
  </Tab.Navigator>
);

export default DashBoardNavigator;
