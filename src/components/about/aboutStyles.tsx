import {StyleSheet} from 'react-native';

const aboutStyles = StyleSheet.create({
  listContainer: {
    backgroundColor: '#0b1532',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 'auto',
    height: 200,
    width: 200,
  },
  title: {
    textAlign: 'center',
    color: '#ffffff',
    paddingBottom: 10,
    fontSize: 30,
    fontFamily: 'Jost-Bold',
  },
  description: {
    color: '#a9b0c6',
    textAlign: 'center',
    paddingBottom: 10,
    paddingHorizontal: 60,
    fontFamily: 'Jost-Regular',
    fontSize: 16,
    lineHeight: 22,

  },
  link: {
    flexDirection: 'row-reverse',
    color: '#0eaa4f',
  },
});

export default aboutStyles;
