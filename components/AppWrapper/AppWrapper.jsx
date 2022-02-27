import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from '../../screens/Profile/Profile';
import Settings from '../../screens/Settings/Settings';
import Login from '../../screens/Login/Login';
import SignUp from '../../screens/SignUp/SignUp';
import { useAuth } from '../../hooks/useAuth';
import { Text, View } from 'react-native';
import { Icon } from 'react-native-elements';
import NewsFeed from '../../screens/NewsFeed/NewsFeed';
import Friends from '../../screens/Friends/Friends';

const Tab = createBottomTabNavigator();

export default function AppWrapper() {
  const { authenticated } = useAuth();

  return (
    <Tab.Navigator>
      {authenticated ? (
        <>
          <Tab.Screen
            name="NewsFeed"
            component={NewsFeed}
            options={{
              tabBarIcon: ({ color }) => <Icon name="home" />,
            }}
          />
          <Tab.Screen
            name="Friends"
            component={Friends}
            options={{
              tabBarIcon: ({ color }) => <Icon name="people" />,
            }}
          />
          <Tab.Screen
            name="Profile"
            component={Profile}
            options={{
              tabBarIcon: ({ color }) => <Icon name="account-circle" />,
            }}
          />
          <Tab.Screen
            name="Settings"
            component={Settings}
            options={{
              tabBarIcon: ({ color }) => <Icon name="settings" />,
            }}
          />
        </>
      ) : (
        <>
          <Tab.Screen
            name="Login"
            component={Login}
            options={{
              title: 'Log in',
              tabBarIcon: () => <Text>Log in</Text>,
            }}
          />
          <Tab.Screen
            name="SignUp"
            component={SignUp}
            options={{
              title: 'Sign Up',
              tabBarIcon: () => <Text>Sign Up</Text>,
            }}
          />
        </>
      )}
    </Tab.Navigator>
  );
}
