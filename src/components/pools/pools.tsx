import React, {useCallback, useMemo} from 'react';
import {FlatList, SafeAreaView} from 'react-native';
import PoolItem from '../poolItem/PoolItem';

const Pools = ({data}: any) => {
  const renderItem = useCallback(({item}) => <PoolItem {...item} />, []);
  /** never use index in keys **/
  const keyExtractor = useCallback(item => item.name.toString(), []);

  const poolsData = useMemo(() => {
    if (!data) {
      return null;
    }
    const values = Object.values(data).filter(({active}: any) => active);
    return values.map(({...rest}: any, index: number) => {
      return {
        index,
        ...rest,
      };
    });
  }, [data]);

  return (
    <SafeAreaView style={{flex: 1}}>
      <FlatList
        nestedScrollEnabled
        data={poolsData}
        // ListHeaderComponent={HeaderComponent}
        // ListFooterComponent={FooterComponent}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        removeClippedSubviews={true}
        windowSize={10}
        initialNumToRender={2}
      />
    </SafeAreaView>
  );

};
export default Pools;
