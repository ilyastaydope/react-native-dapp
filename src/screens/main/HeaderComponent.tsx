import {StatusBar, View} from 'react-native';
import Header from '../../components/header/header';
import Main from '../../components/main/main';
import React from 'react';

const HeaderComponent = ({navigation}: any) => {
  return (
    <View>
      <StatusBar barStyle={'light-content'} />
      <Header navigation={navigation} />
      <Main />
    </View>
  );
};

export default HeaderComponent;
