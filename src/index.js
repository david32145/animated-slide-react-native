import React from 'react';
import {View, StatusBar} from 'react-native';

import Slider from './components/slider';

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#E91E63" />
      <View style={{backgroundColor: '#F06292', flex: 1, position: 'relative'}}>
        <Slider />
      </View>
    </>
  );
}
