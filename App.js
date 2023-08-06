import { View, StatusBar } from "react-native";
import HomeScreen from "./src/screens/HomeScreen";

export default function App() {
  return (
    <View>
      <HomeScreen />
      <StatusBar style="auto" />
    </View>
  );
}
