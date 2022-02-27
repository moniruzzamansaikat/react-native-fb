import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { Avatar, Button, Card } from 'react-native-elements';

const UserCard = () => {
  return (
    <Card>
      <View style={styles.container}>
        <Avatar
          size={80}
          rounded
          source={{
            uri: 'https://scontent.fdac14-1.fna.fbcdn.net/v/t39.30808-6/274104679_493964785661591_2061160777323973907_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=174925&_nc_eui2=AeHgbA7SnfucsJT0KIZuxwTpplI2oO0vRbGmUjag7S9FsShv_11qKmvNLSzzzHxSE-qLXDpC3R_gZHGJPz5yotud&_nc_ohc=DuxRqXv1cEUAX_C0Q37&_nc_ht=scontent.fdac14-1.fna&oh=00_AT-S5tbY206q-0lzqsB729CGAFlo79SRNkrAkhWSy1vhcA&oe=62201AAC',
          }}
        />

        <View style={styles.content}>
          <Text style={styles.nameStyle}>Moniruzzaman Saikat</Text>
          <Button title={'Add Friend'} containerStyle={styles.buttonStyle} />
        </View>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },

  content: {
    marginLeft: 10,
  },

  nameStyle: {
    fontSize: 18,
  },

  buttonStyle: {
    width: 100,
    height: 40,
    marginTop: 5,
  },
});

export default UserCard;
