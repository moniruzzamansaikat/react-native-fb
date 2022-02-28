import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { Card, Button, Icon, Avatar } from 'react-native-elements';
import PostActions from './PostActions';
import PostItemHeader from './PostItemHeader';

const PostItem = ({ post }) => {
  return (
    <View style={styles.container}>
      <Card key={post.id}>
        <PostItemHeader />
        <Card.Divider />

        <Image
          style={{
            width: '100%',
            minHeight: 300,
            resizeMode: 'cover',
          }}
          source={{
            uri: 'https://scontent.fdac14-1.fna.fbcdn.net/v/t39.30808-6/244606871_409556847435719_710503743727963763_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=8bfeb9&_nc_eui2=AeERUjTh4L3wmae3urXxwRcrr91WefLPqvKv3VZ58s-q8mBFIJfNDwhpTqBXoqJeVIhK8ri1YSgPWGehodSIkZX5&_nc_ohc=PFu8j_GejysAX_KBhHJ&tn=962y6kDnW0qrAfcw&_nc_ht=scontent.fdac14-1.fna&oh=00_AT82zpDlTZv7pzitQV40xXet75CtkwwFhwkvh3cMAipn4g&oe=621FC144',
          }}
        />

        <Card.Divider />
        <PostActions />
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
});

export default PostItem;
