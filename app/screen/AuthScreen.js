import React, {Component} from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation'
import {Image} from 'react-native'

import Styles from './Styles'

import LoginScreen from '../screen/LoginScreen'
import SignUpScreen from '../screen/SignupScreen'
import { Button, Text, View, Container } from 'native-base';
import ForgetPassword from '../screen/ForgetPassword';
import HeaderComponent from '../component/HeaderComponent';
import theme from '../../Theme/theme';

class AuthScreen extends Component {

  handleLogIn=()=>{
    this.props.navigation.navigate('Login')
  }

  handleSignUp=()=>{
    this.props.navigation.navigate('Signup')
  }

  render() {
    return (
      <Container>
        
        <HeaderComponent />
        
        <View style={Styles.container}>
        
          <View style={Styles.containerOne}>
            <Image source={require('../images/app_logo.jpg')} style={Styles.imageAppLogo}/>
            <Text style={Styles.appTitle}>Simple Login Application</Text>
          </View>
        
          <View style={Styles.containerTwo}>
          
            <View style={Styles.buttonPosition}>
              <Button light block onPress={this.handleLogIn}>
                <Text style={Styles.buttonLogInText}>LOG IN</Text>
              </Button>
            </View>
            
            <View style={Styles.buttonPosition}>
              <Button transparent light block onPress={this.handleSignUp} style={Styles.buttonLoginStyle}>
                <Text style={Styles.buttonSignUpText}>SIGN UP</Text>
              </Button>
            </View>

          </View> 
        
        </View>
        
      </Container>
    );
  }
}

const AppNavigator = createStackNavigator({
  Auth:{
    screen: AuthScreen,
    navigationOptions: () => ({
      header: null
    }),
  },
  Login:{
    screen: LoginScreen,
    navigationOptions: () => ({
      title: `Log In`,
    }),
  },
  Signup:{
    screen: SignUpScreen,
    navigationOptions: () => ({
      title: `Sign Up`,
    }),
  },
  ForgetPassword:{
    screen: ForgetPassword,
    navigationOptions: () => ({
      title: `Forget Password`,
    }),
  }
})


export default createAppContainer(AppNavigator)