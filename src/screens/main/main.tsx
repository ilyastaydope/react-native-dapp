import React from 'react';
import Header from '../../components/header/header';
import Main from '../../components/main/main';
import HeaderStyles from '../../components/header/headerStyles';
import {SafeAreaView, ScrollView, StatusBar} from 'react-native';
import Tabs from '../../components/tabs/Tabs';
import AboutList from '../../components/about/aboutList';
import Faq from '../../components/faq/Faq';
import Footer from '../../components/footer/footer';

const MainScreen = ({navigation}: any) => {
  return (
    <SafeAreaView style={HeaderStyles.container}>
      <ScrollView>
        <StatusBar barStyle={'light-content'} />
        <Header navigation={navigation} />
        <Main />
        <Tabs />
        <AboutList />
        <Faq />
        <Footer />
      </ScrollView>
    </SafeAreaView>
  );
};

// const HeaderScreen = ({navigation}: any) => {
//   return (
//     <SafeAreaView style={HeaderStyles.container}>
//       <ScrollView>
//       <StatusBar barStyle={'light-content'} />
//       <Header navigation={navigation} />
//       <Main />
//       <Tabs />
//         <AboutList />
//         <Faq />
//         <Footer />
//       </ScrollView>
//     // </SafeAreaView>
//   );
// };

export default MainScreen;
