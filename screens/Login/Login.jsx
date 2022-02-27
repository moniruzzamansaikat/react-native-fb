import React, { useState } from 'react';
import { View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Button, Input, Icon } from 'react-native-elements';
import Loader from '../../components/shared/Loader';
import { useAuth } from '../../hooks/useAuth';

function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const { login } = useAuth();

  const handleLoginSubmit = () => {
    if (!email || !password) {
      alert('Email and password are required');
      return;
    }
    login({ email, password }).catch((error) => {
      alert(error);
      setEmail('');
      setPassword('');
    });
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={{ flex: 1 }}>
        <View
          style={{ alignItems: 'center', flex: 1, justifyContent: 'center' }}
        >
          <Input
            placeholder="Email"
            value={email}
            onChangeText={(text) => setEmail(text)}
            leftIcon={<Icon name="mail-outline" style={{ marginRight: 5 }} />}
          />
          <Input
            value={password}
            secureTextEntry
            placeholder="Password"
            onChangeText={(text) => setPassword(text)}
            leftIcon={<Icon name="lock-outline" style={{ marginRight: 5 }} />}
          />
          <Button
            onPress={handleLoginSubmit}
            title={submitting ? <Loader /> : 'Login'}
            buttonStyle={{
              padding: 10,
              paddingHorizontal: 20,
              backgroundColor: '#6EBF8B',
            }}
            icon={{
              name: 'log-in',
              type: 'ionicon',
              size: 20,
              color: 'white',
            }}
            iconRight
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default Login;
