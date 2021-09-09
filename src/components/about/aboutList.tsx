import React from 'react';
import {View} from 'react-native';
import About from './about';
import {AuditLogo, DownloadLogo, GitHubLogo, WalletLogo} from '../../assets';
import aboutStyles from './aboutStyles';
import goToUrl from '../../utils/goToUrl';
const AboutList = () => {
  return (
    <View style={aboutStyles.listContainer}>
      <About
        image={require('../../assets/images/defi_icon1.png')}
        title={'Transparent DeFi technology'}
        description={
          'Neither the Project Team, nor anyone else has access to user funds deposited via DeFireX smart contract. All balances and transactions are open and available for verification.'
        }
        url={goToUrl('etherScan')}
        linkText={'Check balance on Etherscan'}
        logo={<WalletLogo />}
      />
      <About
        image={require('../../assets/images/audit_icon.png')}
        title={'Successfully passed security audit'}
        description={
          'The reliability and transparency of our service and smart contract is confirmed by a public report from a renowned team of auditors.'
        }
        url={goToUrl('securityAudit')}
        linkText={'Read the Security Audit'}
        logo={<AuditLogo />}
      />
      <About
        image={require('../../assets/images/source_code_icon.png')}
        title={'Open source code'}
        description={
          'Neither the Project Team, nor anyone else has access to user funds deposited via DeFireX smart contract. All balances and transactions are open and available for verification.'
        }
        url={goToUrl('github')}
        linkText={'See code on GitHub'}
        logo={<GitHubLogo />}
      />
      <About
        image={require('../../assets/images/autonomous_icon.png')}
        title={'Autonomous and full control over funds'}
        description={
          'Our service uses a fully transparent decentralized smart contract architecture built on Ethereum blockchain'
        }
        url={goToUrl('guide')}
        linkText={'See guide'}
        logo={<DownloadLogo />}
      />
    </View>
  );
};

export default AboutList;
