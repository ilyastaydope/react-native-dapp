import {StyleSheet} from 'react-native';

const PoolItemStyles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 20,
  },
  container: {
    backgroundColor: '#232a44',
    alignSelf: 'center',
    width: '100%',
    borderRadius: 30,
    overflow: 'hidden',
    marginTop: 20,
  },
  risk: {
    textAlign: 'center',
    color: '#ffffff',
    fontFamily: 'Jost-Regular',
    fontSize: 15,
  },
  content: {
    padding: 10,
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'center',
  },
  labelWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16,
    width: 65,
    lineHeight: 25,
  },
  apy: {
    textAlign: 'center',
    width: 100,
    fontSize: 20,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  line: {
    borderBottomColor: 'rgba(255, 255, 2555, 0.2)',
    borderBottomWidth: 1,
  },
  lineWrapper: {
    paddingHorizontal: 30,
    marginBottom: 10,
  },
  earn: {
    marginTop: 3,
    paddingHorizontal: 30,
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingBottom: 4,
  },
  earnTitle:{
    color: '#7d8390',
    fontFamily: 'Jost-Bold',
  },
  title:{
    color: '#ffffff',
    fontFamily: 'Jost-Bold',
  },
  earnWrapper:{
    paddingBottom: 20,
  }

});

export default PoolItemStyles;
