import React, { useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { UserContext } from '../context/UserContext';

const HomeScreen = () => {

  const { user, updateUser } = useContext(UserContext);

  const handleUpdateName = () => {
    const updatedUser = { ...user, name: 'New Name' };
    updateUser(updatedUser);
  };

  return (
    <View>
      <Text>{user.name}</Text>
      <Text>{user.email}</Text>
      <TouchableOpacity onPress={handleUpdateName}>
        <Text>Update Name</Text>
      </TouchableOpacity>
    </View>
  );
};
export default HomeScreen;
