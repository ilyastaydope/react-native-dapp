import React from 'react';
import {Text} from 'react-native';
import MaskedView from '@react-native-community/masked-view';
import LinearGradient from 'react-native-linear-gradient';
const GradientText = (props: any) => {
  return (
    <MaskedView maskElement={<Text {...props} />}>
      <LinearGradient
        colors={['#ffde16', '#87c433']}
        start={{x: 0, y: 1}}
        end={{x: 1, y: 0}}>
        <Text {...props} style={[props.style, {opacity: 0}]}
        />
      </LinearGradient>
    </MaskedView>
    // <LinearTextGradient
    //   style={{fontWeight: 'bold', fontSize: 25}}
    //   locations={[0, 1]}
    //   colors={['#87c433', '#ffde16']}
    //   start={{x: 0, y: 1}}
    //   end={{x: 1, y: 0}}>
    //   <Text>{text}</Text>
    // </LinearTextGradient>
  );
};

export default GradientText;
