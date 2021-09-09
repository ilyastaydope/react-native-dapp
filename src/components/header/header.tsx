import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {BurgerButton, Logo, UsFlag} from '../../assets/';
import HeaderStyles from './headerStyles';

const Header = ({navigation}: any) => {
  return (
    <View style={HeaderStyles.main}>
      <Logo />
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <BurgerButton />
      </TouchableOpacity>
      <UsFlag />
    </View>
  );
};

export default Header;
