import {StyleSheet} from 'react-native';

const faqStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#202944',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontFamily: 'Jost-Bold',
    textAlign: 'center',
    color: '#ffffff',
    fontSize: 35,
    backgroundColor: '#0b1532',
    paddingVertical: 20
  },
  activeContainer: {
    backgroundColor: '#c9bebe',
    paddingHorizontal: 20,
    borderRadius: 30,
    marginHorizontal: -30,
  },
  title: {
    textAlign: 'center',
    fontFamily: 'Jost-Bold',
    color: '#ffffff',
    fontSize: 18,
  },
  activeTitle: {
    textAlign: 'center',
    fontFamily: 'Jost-Bold',
    color: '#0b1532',
    fontSize: 18,
  },
  descriptionWrapper: {
    backgroundColor: '#c9bebe',
    borderRadius: 30
  },
  descriptionTitle: {
    fontSize: 17,
    color: '#0b1532',
  },
});

export default faqStyles;
