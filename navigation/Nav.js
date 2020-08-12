import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import PostScreen from '../screens/Posts';
import HeaderTitle from '../components/HeaderTitle';

const AppNavigator = createStackNavigator({
  Home: {
    screen: PostScreen,
    navigationOptions: {
      headerTitle: () => <HeaderTitle />,
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontFamily: 'chilanka'
      },
      headerStyle: {
        backgroundColor: '#000',
      },
    }
  }
});

export default createAppContainer(AppNavigator)