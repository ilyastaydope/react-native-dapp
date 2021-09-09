import React from 'react';
import {Image, View, Text, TouchableOpacity, Linking} from 'react-native';
import aboutStyles from './aboutStyles';

const About = (props: any) => {
  const {image, title, description, url, linkText, logo} = props;
  return (
    <View style={aboutStyles.listContainer}>
      <Image style={aboutStyles.image} source={image} />
      <Text style={aboutStyles.title}>{title}</Text>
      <Text style={aboutStyles.description}>{description}</Text>
      <TouchableOpacity
        style={aboutStyles.link}
        onPress={() => Linking.openURL(url)}>
        <Text style={aboutStyles.link}>{linkText}</Text>
        {logo}
      </TouchableOpacity>
    </View>
  );
};

export default About;
