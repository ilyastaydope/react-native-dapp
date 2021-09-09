import {StyleSheet} from 'react-native';

const TabsStyles = StyleSheet.create({
  container: {
    backgroundColor: '#0b1532',
    paddingBottom: 10,
    paddingHorizontal: 10,
  },
  title: {
    color: '#ffffff',
    fontFamily: 'Jost-Regular',
    fontSize: 19,
    textAlign: 'center',
    paddingBottom: 10,
  },
  tabsContainer: {
    backgroundColor: '#202d45',
    borderRadius: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    minWidth: 300,
    alignSelf: 'center',
    marginTop: 30,
    position: 'relative',
  },
  tff: {
    width: 100,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    flexBasis: 'auto',
    padding: 15,
    borderRadius: 15,
    transform: [{translateX: -300}],
  },
  tab: {
    position: 'relative',
    zIndex: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexBasis: 'auto',
    flex: 1,
    padding: 15,
    borderRadius: 15,
  },
  activeTab: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexBasis: 'auto',
    flex: 1,
    color: '#ffffff',
    padding: 15,
    borderRadius: 15,
  },
});

export default TabsStyles;
