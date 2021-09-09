import {StyleSheet} from 'react-native';

const MainStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#0b1532',
    paddingTop: 50,
    paddingBottom: 50,
  },
  textContainer: {
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  title: {
    color: '#ffffff',
    fontFamily: 'Jost-Regular',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  },
  description: {
    color: '#ffffff',
    marginTop: 10,
    fontFamily: 'Jost-Regular',
    fontSize: 15,
    textAlign: 'center',
  },
  border: {
  },
  article: {
    alignItems: 'center',
    paddingTop: 5,
    flexDirection: 'row',
  },
  articleText: {
    textAlign: 'center',
    color: '#0eaa4f',
    marginRight: 10,
  },
  gradient: {
    borderRadius: 15,
    marginTop: 10,
    shadowColor: '#ffde16',
    shadowOpacity: 0.4,
    shadowRadius: 20,
    shadowOffset: {
      height: 6,
      width: 8,
    },
  },
  button: {
    paddingHorizontal: 75,
    paddingVertical: 15,
  },
});

export default MainStyles;
