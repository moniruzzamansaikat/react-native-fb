import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { Avatar, Icon } from 'react-native-elements';
import { useState } from 'react';
import PostOptionMenu from './PostOptionMenu';

const PostItemHeader = () => {
  const [menuPressed, setMenuPressed] = useState(false);

  return (
    <View style={styles.headerContainer}>
      {menuPressed && (
        <PostOptionMenu
          visible={menuPressed}
          onBackdropPress={() => setMenuPressed(false)}
        />
      )}

      <View style={styles.container}>
        <Avatar
          size={50}
          rounded
          source={{
            uri: 'https://scontent.fdac14-1.fna.fbcdn.net/v/t39.30808-6/274104679_493964785661591_2061160777323973907_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=174925&_nc_eui2=AeHgbA7SnfucsJT0KIZuxwTpplI2oO0vRbGmUjag7S9FsShv_11qKmvNLSzzzHxSE-qLXDpC3R_gZHGJPz5yotud&_nc_ohc=DuxRqXv1cEUAX_C0Q37&_nc_ht=scontent.fdac14-1.fna&oh=00_AT-S5tbY206q-0lzqsB729CGAFlo79SRNkrAkhWSy1vhcA&oe=62201AAC',
          }}
        />
        <View style={styles.texts}>
          <Text style={styles.name}>Moniruzzaman Saikat</Text>
          <Text style={styles.username}>@moniruzzamansaikat</Text>
        </View>
      </View>

      <View>
        <TouchableOpacity onPress={() => setMenuPressed(true)}>
          <Icon
            name="ellipsis-vertical-outline"
            type="ionicon"
            style={{ marginTop: 10 }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  container: {
    flexDirection: 'row',
    marginBottom: 12,
  },

  texts: {
    marginLeft: 10,
  },

  name: {
    color: '#141E27',
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 2,
  },
  username: {
    fontSize: 12,
  },
});

export default PostItemHeader;
