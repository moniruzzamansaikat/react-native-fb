import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import { Card, Divider, ListItem, Overlay } from 'react-native-elements';

const PostOptionMenu = ({ visible, onBackdropPress }) => {
  return (
    <Overlay
      isVisible={visible}
      onBackdropPress={onBackdropPress}
      overlayStyle={{ width: '90%', borderRadius: 10 }}
    >
      <TouchableOpacity style={styles.itemStyle}>
        <Text style={styles.textStyle}>Comment</Text>
      </TouchableOpacity>
      <Divider color="black" />
      <TouchableOpacity style={styles.itemStyle}>
        <Text style={styles.textStyle}>Unfollow</Text>
      </TouchableOpacity>
      <Divider color="black" />
      <TouchableOpacity style={styles.itemStyle}>
        <Text style={styles.textStyle}>Block</Text>
      </TouchableOpacity>
    </Overlay>
  );
};

const styles = StyleSheet.create({
  itemStyle: {
    paddingVertical: 10,
  },

  textStyle: {
    fontSize: 16,
    textAlign: 'center',
  },
});

export default PostOptionMenu;
