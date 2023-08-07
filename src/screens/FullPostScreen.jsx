import { useEffect, useState } from "react";
import { Text, View, Image, Alert } from "react-native";
import styled from "styled-components/native";
import { Loading } from "../components/Loading";

const PostImage = styled.Image`
  width: 100%;
  height: 250px;
  border-radius: 10px;
  margin-bottom: 20px;
`;

const PostText = styled.Text`
  font-size: 18px;
  line-height: 24px;
  text-align: justify;
`;

export const FullPostScreen = ({ route, navigation }) => {
  const [isLoading, setIsLoading] = useState(true);
  const { title, imageUrl, text, createdAt } = route.params;

  useEffect(() => {
    navigation.setOptions({ title });
  }, []);

  if (!text && !imageUrl) {
    return <Loading />;
  }

  return (
    <View style={{ padding: 10 }}>
      <PostImage source={{ uri: imageUrl }} />
      <PostText>{text}</PostText>
    </View>
  );
};
