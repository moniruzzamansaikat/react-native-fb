import { NavigationContainer } from '@react-navigation/native';
import AppWrapper from './components/AppWrapper/AppWrapper';
import { AuthProvider } from './contexts/AuthContext';
import UsersProvider from './contexts/UsersContext';

export default function App() {
  return (
    <AuthProvider>
      <UsersProvider>
        <NavigationContainer>
          <AppWrapper />
        </NavigationContainer>
      </UsersProvider>
    </AuthProvider>
  );
}

