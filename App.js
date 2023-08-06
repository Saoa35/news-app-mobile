import { StatusBar } from "expo-status-bar";
import { Text, View, Image } from "react-native";
import styled from "styled-components/native";

const Post = styled.View`
  padding: 15px;
  margin-top: 22px;
  border-bottom-width: 1px;
  border-bottom-color: rgba(0, 0, 0, 0.1);
  border-bottom-style: solid;
`;

const PostImage = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 12px;
  margin-right: 12px;
`;

export default function App() {
  return (
    <View>
      <Post>
        <PostImage
          source={{
            uri: "https://pbs.twimg.com/media/Eux9UwbVIAIlWBb?format=jpg&name=900x900",
          }}
        />
      </Post>
      <StatusBar style="auto" />
    </View>
  );
}
