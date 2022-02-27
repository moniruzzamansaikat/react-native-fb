import React from 'react';

function BottomBar({ Tab }) {
  return (
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
  );
}

export default BottomBar;
