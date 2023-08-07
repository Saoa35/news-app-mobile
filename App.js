import { View, StatusBar } from "react-native";
import HomeScreen from "./src/screens/HomeScreen";
import { FullPostScreen } from "./src/screens/FullPostScreen";

export default function App() {
  return (
    <View>
      <HomeScreen />
      {/* <FullPostScreen /> */}
      <StatusBar style="auto" />
    </View>
  );
}
