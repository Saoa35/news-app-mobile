import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import styled from "styled-components/native";

const Post = styled.View`
  padding: 15px;
  margin-top: 22px;
  width: 95%;
  height: 80px;
  border-bottom-width: 1px;
  border-bottom-color: rgba(0, 0, 0, 0.1);
  border-bottom-style: solid;
`;

export default function App() {
  return (
    <View>
      <Post />
      <StatusBar style="auto" />
    </View>
  );
}
