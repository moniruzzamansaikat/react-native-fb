import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import { Button, Input } from 'react-native-elements';
import Loader from '../../components/shared/Loader';
import { useAuth } from '../../hooks/useAuth';

function SignUp({ navigation }) {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const { signUp, fetching } = useAuth();

  const handleFormSubmit = () => {
    if (!name) return alert('Name is required!');
    if (!username) return alert('Username is required!');
    if (!email) return alert('Email is required!');
    if (!password) return alert('Password is required!');
    if (password.length < 6)
      return alert('Password must be at least 6 characters long!!');
    if (password !== password2) return alert('Passwords do not match!');

    const data = { name, username, email, password, password2 };
    signUp(data);
  };

  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ paddingVertical: 20 }}>
        <View
          style={{ alignItems: 'center', flex: 1, justifyContent: 'center' }}
        >
          <Input
            label="Name"
            placeholder="Enter your full name"
            value={name}
            onChangeText={(text) => setName(text)}
          />
          <Input
            label="Username"
            placeholder="Enter an username"
            value={username}
            onChangeText={(text) => setUsername(text)}
          />
          <Input
            label="Email"
            keyboardType="email-address"
            placeholder="Enter your email address"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          <Input
            label="Password"
            secureTextEntry
            value={password}
            placeholder="Enter a new password"
            onChangeText={(text) => setPassword(text)}
          />
          <Input
            label="Repeat Password"
            secureTextEntry
            value={password2}
            placeholder="Repeat your password"
            onChangeText={(text) => setPassword2(text)}
          />

          <Button
            onPress={handleFormSubmit}
            title={fetching ? <Loader /> : 'SignUp'}
            buttonStyle={{
              padding: 10,
              paddingHorizontal: 15,
              backgroundColor: '#6EBF8B',
            }}
            icon={
              fetching
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
        </View>
      </ScrollView>
    </View>
  );
}

export default SignUp;
