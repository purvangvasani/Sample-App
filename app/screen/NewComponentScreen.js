import React, { Component } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import ProductList from './ProductList';
import NotificationScreen from './NotificationScreen';

const TabNavigator = createBottomTabNavigator(
  {
    Notification: NotificationScreen,
    ProductList: ProductList,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === 'Notification') {
          iconName = `ios-notifications`;
        } else if (routeName === 'ProductList') {
          iconName = `ios-keypad`;
        }
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
      labelStyle :{
          fontSize: 14,
      }
    },
  }
);

export default createAppContainer(TabNavigator);
