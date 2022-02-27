import React from 'react';
import { ActivityIndicator, View } from 'react-native';

function Loader({ size = 'small', color = '#fff' }) {
  return <ActivityIndicator size={size} color={color} style={{ flex: 1 }} />;
}

export default Loader;
