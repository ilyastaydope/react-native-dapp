import React from 'react';
import {Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import riskData from '../../utils/riskData';

const Risk = (props: any) => {
  const {colors, text} = riskData(props.risk);
  return (
    <LinearGradient colors={colors}>
      <Text style={props.style}>{text}</Text>
    </LinearGradient>
  );
};

export default Risk;
