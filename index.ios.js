// Import library to create Component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

// Create a Component
const App = () => {
  return (
    <View>
      <Header headerText="Albums!" />
      <AlbumList />
    </View>
  );
};

// render device
//
AppRegistry.registerComponent('albums', () => App);
