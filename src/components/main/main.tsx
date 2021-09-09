import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity, Linking} from 'react-native';
import {BinanceChainLogo} from '../../assets';
import MainStyles from './Mainstyles';
import LinearGradient from 'react-native-linear-gradient';
import GradientText from '../gradientText/gradientText';
import DashedLine from "react-native-dashed-line";

const Main = () => {
  const url =
    'https://www.binance.org/en/blog/defirex-launches-farming-on-ethereum-directly-from-binance-smart-chain/';
  return (
    <View style={MainStyles.container}>
      <View style={MainStyles.textContainer}>
        <Text style={MainStyles.title}>Earn </Text>
        <GradientText style={MainStyles.title}>4x more</GradientText>
      </View>
      <Text style={MainStyles.title} > with Compound & Venus risk-free!</Text>
      <Text style={MainStyles.description}>
        We have reduced fees for launching farming for mor than 100 times
        together with Binance Smart Chain
      </Text>
      <View style={MainStyles.border}>
        <TouchableOpacity
          style={MainStyles.article}
          onPress={() => Linking.openURL(url)}>
          <Text style={MainStyles.articleText}>Read article on </Text>
          <BinanceChainLogo />
        </TouchableOpacity>
        <View>
          <DashedLine
            dashLength={6}
            dashThickness={1}
            dashGap={1}
            dashColor={'#0eaa4f'}
          />
        </View>
      </View>
      <TouchableOpacity style={MainStyles.gradient}>
        <LinearGradient
          style={MainStyles.gradient}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={['#ffde16', '#87c433']}>
          <Text style={MainStyles.button}>Install MetaMask</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

export default Main;
