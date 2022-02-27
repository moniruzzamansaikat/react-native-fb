import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { Button, Input } from 'react-native-elements';
import Loader from '../../components/shared/Loader';

function SignUp({ navigation }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleFormSubmit = () => {};

  return (
    <View style={{ flex: 1 }}>
      <View style={{ alignItems: 'center', flex: 1, justifyContent: 'center' }}>
        <Input placeholder="Name" onChangeText={(text) => setName(text)} />
        <Input
          keyboardType="phone-pad"
          placeholder="Phone Number"
          onChangeText={(value) => setPhone(value)}
        />
        <Input placeholder="Email" onChangeText={(text) => setEmail(text)} />
        <Input
          secureTextEntry
          placeholder="Password"
          onChangeText={(text) => setPassword(text)}
        />
        <Button
          onPress={handleFormSubmit}
          title={submitting ? <Loader /> : 'SignUp'}
          buttonStyle={{
            padding: 10,
            paddingHorizontal: 20,
            backgroundColor: '#6EBF8B',
          }}
          icon={
            submitting
              ? null
              : {
                  name: 'user',
                  type: 'font-awesome',
                  size: 18,
                  color: 'white',
                }
          }
          iconRight
        />
        <Text style={{ marginVertical: 10, fontWeight: '900' }}>Or </Text>
        <Button
          onPress={() => navigation.navigate('Login')}
          title="Login"
          buttonStyle={{ padding: 10, paddingHorizontal: 20 }}
        />
      </View>
    </View>
  );
}

export default SignUp;
