import { View, Text, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import ScreenContainer from '../../components/shared/ScreenContainer';
import Loader from '../../components/shared/Loader';
import CreatePost from '../../components/Post/CreatePost';
import { Card } from 'react-native-elements';
import PostItem from '../../components/Post/PostItem';

const NewsFeed = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=1')
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
          posts.map((post) => <PostItem key={post.id} post={post} />)
        )}
      </ScrollView>
    </ScreenContainer>
  );
};

export default NewsFeed;
