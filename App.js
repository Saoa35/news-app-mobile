import { View, StatusBar } from "react-native";
import { Post } from "./src/components/Post";

export default function App() {
  return (
    <View>
      <Post
        imageUrl={
          "https://pbs.twimg.com/media/Eux9UwbVIAIlWBb?format=jpg&name=900x900"
        }
        title={"Test article"}
        createDate={"06/08/2023"}
      />
      <StatusBar style="auto" />
    </View>
  );
}
