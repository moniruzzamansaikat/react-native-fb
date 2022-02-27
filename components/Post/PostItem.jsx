import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';
import { Card, Button } from 'react-native-elements';

const PostItem = ({ post }) => {
  return (
    <View>
      <Card key={post.id}>
        <View style={styles.postHeader}>
          <Text style={styles.postTitle}>Moniruzzaman Saikat added photo</Text>
          <Text style={styles.postAddedTime}>2h ago</Text>
        </View>
        <Card.Divider />
        <Text style={styles.postText}>With Shafin 💘</Text>
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

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            maxWidth: '100%',
          }}
        >
          <Button buttonStyle={styles.buttonStyle} title="Like" />
          <Button buttonStyle={styles.buttonStyle} title="Comment" />
          <Button buttonStyle={styles.buttonStyle} title="Share" />
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  postHeader: {
    marginBottom: 10,
  },

  postTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },

  postAddedTime: { fontSize: 12 },

  postText: {
    marginBottom: 10,
  },

  buttonStyle: {
    color: 'black',
  },
});

export default PostItem;
