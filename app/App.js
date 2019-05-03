import React, {Component} from 'react';
import {createDrawerNavigator, DrawerItems, createAppContainer} from 'react-navigation'
import {SafeAreaView, ScrollView} from 'react-native'
import Icon from 'react-native-vector-icons/dist/Entypo';

import AuthScreen from './screen/AuthScreen';
import HomeScreen from './screen/HomeScreen';
import ProfileScreen from './screen/ProfileScreen';
import GalleryScreen from './screen/GalleryScreen';

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
  Gallery: GalleryScreen,
  Login: {screen: AuthScreen},
}, 
{
  contentComponent : CustomDrawerComponent,
  drawerWidth:300,
  defaultNavigationOptions : {
    drawerIcon: ({ tintColor }) => (
      <Icon name="login" style={{fontSize : 24, color:tintColor}} />
    )
  },
  contentOptions:{
    activeTintColor:'#3C53B4'
  },
})

export default createAppContainer(AppDrawerNavigator)