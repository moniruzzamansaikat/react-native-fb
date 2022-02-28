import React, { useState } from 'react';
import { View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Button, Input, Icon } from 'react-native-elements';
import Loader from '../../components/shared/Loader';
import { useAuth } from '../../hooks/useAuth';

function Login({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login, fetching } = useAuth();

  const handleLoginSubmit = () => {
    if (!username || !password) {
      return alert('Username and password are required');
    }

    login({ username, password });
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={{ flex: 1 }}>
        <View
          style={{ alignItems: 'center', flex: 1, justifyContent: 'center' }}
        >
          <Input
            label="Username"
            placeholder="Enter your username"
            value={username}
            onChangeText={(text) => setUsername(text)}
            leftIcon={<Icon name="mail-outline" style={{ marginRight: 5 }} />}
          />
          <Input
            label="Password"
            value={password}
            secureTextEntry
            placeholder="Enter your password"
            onChangeText={(text) => setPassword(text)}
            leftIcon={<Icon name="lock-outline" style={{ marginRight: 5 }} />}
          />
          <Button
            onPress={handleLoginSubmit}
            title={fetching ? <Loader /> : 'Login'}
            buttonStyle={{
              padding: 10,
              paddingHorizontal: 20,
              backgroundColor: '#6EBF8B',
            }}
            icon={
              fetching
                ? null
                : {
                    name: 'log-in',
                    type: 'ionicon',
                    size: 20,
                    color: 'white',
                  }
            }
            iconRight
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default Login;
