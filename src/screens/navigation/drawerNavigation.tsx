import React from 'react';
import HomeStackScreen from './homeStackScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Provider} from 'react-redux';
import store from '../../redux/store/store';
import CustomDrawer from './drawerContent/drawerContent';
const Drawer = createDrawerNavigator();

const Navigation = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Drawer.Navigator
          drawerContent={(props: any) => <CustomDrawer {...props} />}
          initialRouteName="home">
          <Drawer.Screen
            name="Home"
            component={HomeStackScreen}
            options={{headerShown: false}}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </Provider>
  );
};
export default Navigation;
