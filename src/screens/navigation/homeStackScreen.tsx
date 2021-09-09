import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainScreen from '../main/main';
const HomeStack = createNativeStackNavigator();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="main"
        component={MainScreen}
        options={{
          headerStyle: {
            backgroundColor: '#0b1532',
          },
          headerShown: false,
        }}
      />
    </HomeStack.Navigator>
  );
};
export default HomeStackScreen;
