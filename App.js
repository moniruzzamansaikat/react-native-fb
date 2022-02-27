import { NavigationContainer } from '@react-navigation/native';
import AppWrapper from './components/AppWrapper/AppWrapper';
import { AuthProvider } from './contexts/AuthContext';

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <AppWrapper />
      </NavigationContainer>
    </AuthProvider>
  );
}

