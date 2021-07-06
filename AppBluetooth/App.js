import React from 'react';
import {Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import ListStack from 'cubobluetooth/src/components/List/ListStack';
import ActionsStack from 'cubobluetooth/src/components/actions/ActionsStack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import colors from 'cubobluetooth/src/res/colors';

const Tabs = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tabs.Navigator
        tabBarOptions={{
          tintColor: '#fefefe',
          style: {
            backgroundColor: colors.primario,
            borderTopWidth: 0,
          },
        }}>
        <Tabs.Screen
          name="Devices"
          component={ListStack}
          options={{
            tabBarIcon: ({size, color}) => (
              <Image
                style={{tintColor: color, width: size, height: size}}
                source={require('cubobluetooth/src/assets/device-icon.png')}
              />
            ),
          }}
        />

        <Tabs.Screen
          name="Actions"
          component={ActionsStack}
          options={{
            tabBarIcon: ({size, color}) => (
              <Image
                style={{tintColor: color, width: size, height: size}}
                source={require('cubobluetooth/src/assets/led.png')}
              />
            ),
          }}
        />
      </Tabs.Navigator>
    </NavigationContainer>
  );
};

export default App;
