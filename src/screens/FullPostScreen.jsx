import axios from "axios";
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
`;

export const FullPostScreen = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("https://mocki.io/v1/670a3cfb-2656-4295-a5fc-06a631c08b1f/1")
      .then(({ data }) => {
        setData(data);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
        Alert.alert("Error", "Sorry, can`t find an article 🥺");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <View style={{ padding: 8 }}>
      <PostImage
        source={{
          uri: "https://s00.yaplakal.com/pics/pics_original/5/0/6/17827605.jpg",
        }}
      />
      <PostText>
        Библиотека react-native-image-picker предназначена для выбора
        изображений и видео как из галлереи устройства. Также можно запустить
        камеру из приложения, сделать фото или видео и получить доступ к этим
        медиафайлам внутри приложения. Для запуска галлереи нужно вызвать метод
        launchImageLibrary, который принимает на вход объект параметров для
        отображения и обработки медиафайлов. Например, можно управлять качеством
        выбранного изображения или видеозаписи, объемом, разрешением и
        количеством загружаемых файлов, длительностью загружаемых видеозаписей и
        др. Подробнее можно почитать в этом репозитории.
      </PostText>
    </View>
  );
};
