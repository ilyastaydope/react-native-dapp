import {View} from 'react-native';
import AboutList from '../../components/about/aboutList';
import Faq from '../../components/faq/Faq';
import Footer from '../../components/footer/footer';
import React from 'react';

const FooterComponent = () => {
  return (
    <View>
      <AboutList />
      <Faq />
      <Footer />
    </View>
  );
};

export default FooterComponent;
