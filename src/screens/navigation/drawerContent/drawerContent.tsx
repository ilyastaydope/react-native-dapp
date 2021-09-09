import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Button,
  Linking,
} from 'react-native';
import {Logo, PoolsIcon, WaranteeIcon, WikiIcon} from '../../../assets';
import drawerStyles from './drawerStyles';

const CustomDrawer = () => {
  return (
    <SafeAreaView style={drawerStyles.container}>
      <Logo />
      <View style={drawerStyles.wrapper}>
        <TouchableOpacity>
          <WaranteeIcon />
          <Text style={drawerStyles.link}> Guarantees </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <PoolsIcon />
          <Text style={drawerStyles.link}> Pools </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <WikiIcon />
          <Text style={drawerStyles.link}> Wiki </Text>
        </TouchableOpacity>
      </View>
      <Button title={'DFX Airdrop'} onPress={() => console.log('new screen')} />
      <Button
        title={'Buy DFRX'}
        onPress={() =>
          Linking.openURL('https://app.1inch.io/#/56/swap/DFX/BUSD')
        }
      />
    </SafeAreaView>
  );
};

export default CustomDrawer;
