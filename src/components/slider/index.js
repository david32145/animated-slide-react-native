import React from 'react';
import {Animated} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {PanGestureHandler, State} from 'react-native-gesture-handler';

import {Circle, Indicator, TextIndicator} from './styles';

export default function Slider() {
  const translateX = new Animated.Value(10);
  let offsetX = 0;
  const eventSlide = Animated.event([
    {
      nativeEvent: {
        translationX: translateX,
      },
    },
  ]);

  function onHandlerStateChange({nativeEvent}) {
    if (nativeEvent.oldState === State.ACTIVE) {
      offsetX += nativeEvent.translationX;
      console.log(nativeEvent.translationX, offsetX);
      let openned = false;
      if (nativeEvent.translationX >= 100) {
        openned = true;
      } else {
        if (nativeEvent.translationX < -50) {
          offsetX = -offsetX;
          translateX.setValue(offsetX);
          translateX.setOffset(0);
          offsetX = 0;
        } else if (nativeEvent.translationX < 0) {
          openned = true;
        }
      }
      Animated.timing(translateX, {
        toValue: openned ? 200 : 10,
        duration: 300,
      }).start(() => {
        offsetX = openned ? 200 : 10;
        translateX.setOffset(offsetX);
        translateX.setValue(0);
      });
    }
  }

  return (
    <PanGestureHandler
      onGestureEvent={eventSlide}
      onHandlerStateChange={onHandlerStateChange}>
      <Circle
        style={{
          width: translateX.interpolate({
            inputRange: [10, 200],
            outputRange: ['5%', '100%'],
            extrapolate: 'clamp',
          }),
          borderTopRightRadius: translateX.interpolate({
            inputRange: [10, 60, 100, 160, 200],
            outputRange: [0, 250, 500, 250, 0],
            extrapolate: 'clamp',
          }),
          borderBottomRightRadius: translateX.interpolate({
            inputRange: [10, 60, 100, 160, 200],
            outputRange: [0, 250, 500, 250, 0],
            extrapolate: 'clamp',
          }),
        }}>
        <Indicator>
          <Icon size={15} name="play-arrow" color="#F4F" />
        </Indicator>
      </Circle>
    </PanGestureHandler>
  );
}
