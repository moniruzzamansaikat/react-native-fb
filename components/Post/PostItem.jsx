import { View, Text } from 'react-native';
import React from 'react';
import { Card } from 'react-native-elements';

const PostItem = ({ post }) => {
  return (
    <View>
      <Card key={post.id}>
        <Card.Title style={{ textAlign: 'left' }}>
          Moniruzzaman Saikat added photo
        </Card.Title>
        <Card.Divider />
        <Image />
      </Card>
    </View>
  );
};

export default PostItem;
