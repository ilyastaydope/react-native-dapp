import React from 'react';
import {View, Text} from 'react-native';
import {LogoText} from '../../assets';
import TextLink from './TextLink';
import goToUrl from '../../utils/goToUrl';
import footerStyles from './footerStyles';
const Footer = () => {
  return (
    <View style={footerStyles.wrapper}>
      <LogoText style={{alignSelf: 'center'}} />
      <View style={footerStyles.container}>
        <TextLink text="Audit" url={goToUrl('securityAudit')} />
        <TextLink text="Contract" url={goToUrl('contract')} />
        <TextLink text="GitHub" url={goToUrl('github')} />
        <TextLink text="Licence" url={goToUrl('licence')} />
        <Text>Support</Text>
      </View>
    </View>
  );
};

export default Footer;
