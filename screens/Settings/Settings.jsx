import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Card, Icon } from 'react-native-elements';
import ScreenContainer from '../../components/shared/ScreenContainer';

function Settings() {
  return (
    <ScreenContainer>
      <Card>
        <View style={styles.container}>
          <Icon name="account-circle" />
          <Text style={styles.textStyle}>Profile Information</Text>
        </View>
      </Card>
      <Card>
        <View style={styles.container}>
          <Icon name="login" />
          <Text style={styles.textStyle}>Security</Text>
        </View>
      </Card>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  textStyle: {
    marginLeft: 10,
  },
});

export default Settings;
