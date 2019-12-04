import {Animated} from 'react-native';
import styled from 'styled-components/native';

export const Circle = styled(Animated.View)`
  background-color: #673ab7;
  height: 100%;
  position: absolute;
  left: 0;
`;

export const Indicator = styled.TouchableOpacity`
  width: 30px;
  height: 30px;
  border-radius: 15px;
  elevation: 2;
  right: -15px;
  position: absolute;
  top: 50%;
  background-color: #ccc;
  align-items: center;
  justify-content: center;
`;

export const TextIndicator = styled.Text``;
