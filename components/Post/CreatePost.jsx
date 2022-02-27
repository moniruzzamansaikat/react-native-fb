import { View, Text } from 'react-native';
import React, { useState } from 'react';
import { Button, Card, Input } from 'react-native-elements';

const CreatePost = () => {
  const [postContent, setPostContent] = useState('');

  return (
    <View>
      <Card>
        <Input
          placeholder="What's on your mind ?"
          value={postContent}
          onChangeText={(text) => setPostContent(text)}
          containerStyle={{ marginLeft: -10 }}
          multiline
        />
        <Button
          disabled={postContent.length < 4}
          title="Post"
          containerStyle={{ width: 100, marginTop: -12 }}
        />
      </Card>
    </View>
  );
};

export default CreatePost;
