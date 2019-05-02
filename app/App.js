import React, {Component} from 'react';
import {createDrawerNavigator, DrawerItems, createAppContainer} from 'react-navigation'
import {SafeAreaView, ScrollView} from 'react-native'

import AuthScreen from './screen/AuthScreen';
import HomeScreen from './screen/HomeScreen';
import ProfileScreen from './screen/ProfileScreen';

class App extends Component {

  render() {
    return (
        <AppDrawerNavigator />
    );
  }

}

const CustomDrawerComponent = (props) => (
  <SafeAreaView style={{flex : 1}}>
      {/* <Text style={{color:'blue',fontSize:30,fontWeight: 'bold', justifyContent: 'center',}}>Sample App</Text>     */}
    <ScrollView>
      <DrawerItems {...props} />
    </ScrollView>
  </SafeAreaView>
 )

const AppDrawerNavigator = createDrawerNavigator({
  Home:  HomeScreen,
  Profile: ProfileScreen,
  Login: AuthScreen,
}, 
{
  contentComponent : CustomDrawerComponent,
  drawerWidth:300,
  contentOptions:{
    activeTintColor:'#3C53B4'
  },
})

export default createAppContainer(AppDrawerNavigator)