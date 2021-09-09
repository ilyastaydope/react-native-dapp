import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import TabsStyles from '../tabs/TabsStyles';

const Tab = (props: any) => {
  const {onPress, text} = props;
  return (
    <TouchableOpacity style={{flex: 1}} onPress={onPress}>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 0, y: 0.8}}
        colors={['#202944', '#202944']}
        style={TabsStyles.tab}>
        <Text style={{color: 'white'}}>{text}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default Tab;
