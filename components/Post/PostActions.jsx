import { View, Text, TouchableOpacity } from 'react-native';
import React, { useEffect } from 'react';
import { Icon, Overlay } from 'react-native-elements';
import { useState } from 'react';

const PostActions = () => {
  const [liked, setLiked] = useState(true);

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
        <Text style={{ marginLeft: 5 }}>1048</Text>
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
        <TouchableOpacity>
          <Icon name="bookmark-outline" type="ionicon" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PostActions;
