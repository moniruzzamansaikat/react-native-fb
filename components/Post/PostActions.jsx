import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import { Icon } from 'react-native-elements';
import { useState } from 'react';

const PostActions = () => {
  const [liked, setLiked] = useState(true);
  const [saved, setSaved] = useState(true);

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        maxWidth: '100%',
      }}
    >
      {/* like buttons */}
      <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Icon
          name={`${liked ? 'heart' : 'heart-outline'}`}
          type="ionicon"
          color={liked ? 'red' : 'blue'}
        />
        <Text style={styles.likesCountText}>1048</Text>
      </TouchableOpacity>

      {/* share and bookmark buttons */}
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <TouchableOpacity
          style={{ marginRight: 10 }}
          onPress={() => alert('share')}
        >
          <View style={{ padding: 5 }}>
            <Icon name="share-social-outline" type="ionicon" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSaved(!saved)}>
          <Icon
            name={`${saved ? 'bookmark' : 'bookmark-outline'}`}
            type="ionicon"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  likesCountText: {
    fontSize: 14,
    marginLeft: 2,
    fontWeight: 'bold',
  },
});

export default PostActions;
