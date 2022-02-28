import { View, Text } from 'react-native';
import React from 'react';
import { Overlay } from 'react-native-elements';

const PostOptionMenu = ({ visible, onBackdropPress }) => {
  return (
    <Overlay
      isVisible={visible}
      onBackdropPress={onBackdropPress}
      style={{ flex: 1 }}
    >
      <Text>Hello</Text>
    </Overlay>
  );
};

export default PostOptionMenu;
