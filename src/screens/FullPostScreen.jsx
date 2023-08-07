import { useEffect } from "react";
import { Text, View, Image, Alert } from "react-native";
import styled from "styled-components/native";

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
  const { title, imageUrl, text } = route.params;

  useEffect(() => {
    navigation.setOptions({ title });
  }, []);

  return (
    <View style={{ padding: 10 }}>
      <PostImage source={{ uri: imageUrl }} />
      <PostText>{text}</PostText>
    </View>
  );
};
