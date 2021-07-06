import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ListScreen from './ListScreen';
import DeviceDetailScreen from './DeviceDetailScreen';
import colors from 'cubobluetooth/src/res/colors';

const Stack = createStackNavigator();

const ListStack = () => {
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
      <Stack.Screen name="Devices List" component={ListScreen} />

      <Stack.Screen name="DeviceDetail" component={DeviceDetailScreen} />
    </Stack.Navigator>
  );
};

export default ListStack;
