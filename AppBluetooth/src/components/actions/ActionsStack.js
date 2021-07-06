import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ActionsScreen from './ActionsScreen';
import colors from 'cubobluetooth/src/res/colors';

const Stack = createStackNavigator();

const ActionsStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitle: false,
        headerStyle: {
          backgroundColor: colors.primario,
          height: 0,
        },
        headerTintColor: colors.white,
      }}>
      <Stack.Screen name="Actions" component={ActionsScreen} />
    </Stack.Navigator>
  );
};

export default ActionsStack;
