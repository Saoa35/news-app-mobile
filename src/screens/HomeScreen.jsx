import {
  View,
  Alert,
  FlatList,
  ActivityIndicator,
  Text,
  RefreshControl,
  TouchableOpacity,
} from "react-native";
import { useEffect, useState } from "react";
import axios from "axios";
import { Post } from "../components/Post";

export default function HomeScreen() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchPosts = () => {
    setIsLoading(true);
    axios
      .get("https://mocki.io/v1/670a3cfb-2656-4295-a5fc-06a631c08b1f")
      .then(({ data }) => {
        setPosts(data);
      })
      .catch((err) => {
        console.log(err);
        Alert.alert("Error", "Sorry, can`t find an articles 🥺");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
        <Text style={{ marginTop: "15px" }}>Loading articles...</Text>
      </View>
    );
  }

  return (
    <View>
      <FlatList
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={fetchPosts} />
        }
        data={posts}
        renderItem={({ item }) => (
          <TouchableOpacity>
            <Post
              imageUrl={item.imageUrl}
              title={item.title}
              createdAt={item.createdAt}
            />
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
