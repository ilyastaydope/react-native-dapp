import React from 'react';
import {Linking, TouchableOpacity, Text} from 'react-native';

const TextLink = ({text, url}: any) => {
  return (
    <TouchableOpacity onPress={() => Linking.openURL(url)}>
      <Text style={{color: '#ffffff'}}>{text}</Text>
    </TouchableOpacity>
  );
};

export default TextLink;
