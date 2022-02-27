import { View, Text, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import ScreenContainer from '../../components/shared/ScreenContainer';
import Loader from '../../components/shared/Loader';
import CreatePost from '../../components/Post/CreatePost';
import { Card } from 'react-native-elements';

const NewsFeed = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=100')
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setPosts(data);
      });
  }, []);

  return (
    <ScreenContainer>
      <ScrollView contentContainerStyle={{ flex: loading ? 1 : 0 }}>
        <CreatePost />

        {loading ? (
          <View style={{ flex: 1 }}>
            <Loader color="#0f0f0f" size="large" />
          </View>
        ) : (
          posts.map((post) => (
            <Card key={post.id}>
              <Card.Title>{post.title}</Card.Title>
              <Card.Divider />
              <Text>{post.body}</Text>
            </Card>
          ))
        )}
      </ScrollView>
    </ScreenContainer>
  );
};

export default NewsFeed;
