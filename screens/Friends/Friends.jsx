import { View, Text } from 'react-native';
import React from 'react';
import ScreenContainer from '../../components/shared/ScreenContainer';
import UserCard from '../../components/Users/UserCard';
import { useUsers } from '../../hooks/userUsers';

const Friends = () => {
  const { users } = useUsers();

  console.log(users);

  return (
    <ScreenContainer>
      {users.map((user) => (
        <UserCard user={user} key={user._id} />
      ))}
    </ScreenContainer>
  );
};

export default Friends;
