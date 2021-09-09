import React from 'react';
import {View, Text} from 'react-native';
import Risk from '../risk/Risk';
import {SvgUri} from 'react-native-svg';
import PoolItemStyles from './PoolItemStyles';
import GradientText from '../gradientText/gradientText';
import {InfoLogo} from '../../assets';

const PoolItem = (props: any) => {
  const url = 'https://defirex.org';
  const {risk, apy, index, icon, earn, label, supply} = props;
  const apyParsed = apy.toFixed(2);
  const uppercasedLabel = label.toUpperCase();
  const totalSupply = (supply.users / 1000).toFixed(2);
  return (
    <View style={PoolItemStyles.wrapper}>
      <View style={PoolItemStyles.container}>
        <Risk style={PoolItemStyles.risk} risk={risk} />
        <View style={PoolItemStyles.content}>
          <View>
            <SvgUri uri={`${url}/${icon}`} width={40} height={40} />
          </View>
          <View style={PoolItemStyles.labelWrapper}>
            <Text style={PoolItemStyles.label}>{uppercasedLabel}</Text>
            <InfoLogo />
          </View>
          <View style={PoolItemStyles.apy}>
            <GradientText style={PoolItemStyles.apy}>
              {apyParsed} % APY
            </GradientText>
          </View>
        </View>
        <View style={PoolItemStyles.lineWrapper}>
          <View style={PoolItemStyles.line} />
        </View>
        <View style={PoolItemStyles.earnWrapper}>
          <View style={PoolItemStyles.earn}>
            <Text style={PoolItemStyles.earnTitle}>Earn</Text>
            <Text style={PoolItemStyles.title}>{earn}</Text>
          </View>
          <View style={PoolItemStyles.earn}>
            <Text style={PoolItemStyles.earnTitle}>Your balance</Text>
            <Text style={PoolItemStyles.title}>0</Text>
          </View>
          <View style={PoolItemStyles.earn}>
            <Text style={PoolItemStyles.earnTitle}>Total deposits</Text>
            <Text style={PoolItemStyles.title}>$ {totalSupply} K</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default PoolItem;
