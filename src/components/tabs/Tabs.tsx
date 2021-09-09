import React, {useEffect, useState, useRef, useMemo} from 'react';
import {View, Text, Animated} from 'react-native';
import Tab from '../tab/tab';
import TabsStyles from './TabsStyles';
import {useDispatch, useSelector} from 'react-redux';
import fetchPools from '../../utils/fetchPools';
import {tabsActions} from '../../redux/features/tabs';
import tabsSchema from '../../utils/tabsSchema';
import Pools from '../pools/pools';
import LinearGradient from 'react-native-linear-gradient';

const Tabs = () => {
  const tabs = useSelector(({tabReducer}: any) => tabReducer);
  const [currentKey, setCurrentKey] = useState<any>('1');
  const offsetLeft = useRef(new Animated.Value(0)).current;
  const animation = () => {
    const keys = Object.keys(tabs);
    const index = keys.length ? keys.indexOf(currentKey) : 0;
    const width = 100 * index;
    Animated.timing(offsetLeft, {
      toValue: width,
      useNativeDriver: true,
      duration: 200,
    }).start();
  };

  useEffect(() => {
    animation();
  }, [currentKey, offsetLeft]);

  const dispatch = useDispatch();

  const changeTab = (value: any) => () => {
    setCurrentKey(value);
  };

  useEffect(() => {
    (async function fetchMyApi() {
      try {
        const {data} = await fetchPools();
        dispatch(tabsActions.getTabs(data));
      } catch (e) {
        console.log(e);
      }
    })();
  }, [dispatch]);

  const tabContent = useMemo(() => {
    {
      return Object.entries(tabs).map(([key]: any, id: number) => {
        return (
          <Tab
            key={id}
            // @ts-ignore
            text={tabsSchema[key]}
            onPress={changeTab(key)}
          />
        );
      });
    }
  }, [tabs]);

  return (
    <View style={TabsStyles.container}>
      <Text style={TabsStyles.title}>
        The APR and APY values are calculated based on the current indicators of
        the services used and may change during the day.
      </Text>
      <View style={TabsStyles.tabsContainer}>
        {tabContent}
        <Animated.View style={{transform: [{translateX: offsetLeft}]}}>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 0, y: 0.8}}
            colors={['#ffffff', '#a9b0c6']}
            style={TabsStyles.tff}>
            <Text>
              {
                //@ts-ignore
                tabsSchema[currentKey]
              }
            </Text>
          </LinearGradient>
        </Animated.View>
      </View>
      <Pools data={tabs[currentKey]} />
    </View>
  );
};

export default Tabs;
