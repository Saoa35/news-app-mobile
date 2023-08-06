import { View, Alert, StatusBar } from "react-native";
import { Post } from "./src/components/Post";
import { useEffect, useState } from "react";
import axios from "axios";

export default function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://mocki.io/v1/670a3cfb-2656-4295-a5fc-06a631c08b1f")
      .then(({ data }) => {
        setPosts(data);
      })
      .catch((err) => {
        console.log(err);
        Alert.alert("Error", "Sorry, can`t find an articles 🥺");
      });
  }, []);

  return (
    <View>
      {posts.map((post) => (
        <Post
          key={post.id}
          imageUrl={post.imageUrl}
          title={post.title}
          createdAt={post.createdAt}
        />
      ))}
      <StatusBar style="auto" />
    </View>
  );
}
