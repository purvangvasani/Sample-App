import React, { Component } from 'react'
import { View, TextInput } from 'react-native'
import {connect} from 'react-redux'

import {authAddUser} from '../../actions/Auth'

import Styles from './Styles'
import { Container, Content, Text, Card, CardItem, Input, Button } from 'native-base';

class LoginScreen extends Component {

  state={
    isLogged: false,
    isEmail: false,
    isPass: false,
    FullName: '',
    Email: '',
    Password: ''
  }

  handleLogIn=()=>{
    if(this.state.Email === '' || this.state.Password === ''){
      alert("Please Fill all Fields...")
    }
    else if(this.state.Email === this.props.prod.Email){
      if(this.state.Password === this.props.prod.Password){
        this.setState({
          isLogged: true
        })
        this.props.addUser(this.props.prod.FullName, this.props.prod.Email, this.props.prod.Password, true)
        this.props.navigation.navigate('Home')
        this.handleClear()
      }
      else{
        alert("Password Doesn't Match..")
      }
    }
    else{
      alert("Please use correct credentials..")
    }
  }

  handleClear=()=>{
    this.emailInput.clear()
    this.passwordInput.clear()
  }

  handleEmailChange=(value)=>{
    var pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/; 

    if(pattern.test(value)){
      this.setState({
        Email: value,
        isEmail: false
      })
    }
    else if(!pattern.test(value)){
      this.setState({
        isEmail: true,
        Email: ''
      })
    }
  }

  handlePassChange=(value)=>{
    if(value.length < 4){
      this.setState({
        Password: '',
        isPass: true
      })
    }
    else if(value.length > 4){
      this.setState({
        isPass: false,
        Password: value
      })
    }
  }

  handleForgetPassword=()=>{
    this.props.navigation.navigate('ForgetPassword')
  }

  render() {
    return (
      <Container>
          <Content padder>
            <View style={Styles.containerOne}>
              <Text style={Styles.headText}> 
                Log in to your account
              </Text>
              <Card>
                <CardItem>
                    <TextInput 
                      ref={input => { this.emailInput = input }}
                      onChangeText={this.handleEmailChange}
                      name="email"
                      style={Styles.inputText}
                      placeholder="Email" />
                    {this.state.isEmail ? <Text style={Styles.errorText}>Error</Text>: null}
                </CardItem>
                <CardItem>
                    <TextInput 
                      ref={input => { this.passwordInput = input }}
                      onChangeText={this.handlePassChange}
                      style={Styles.inputText}
                      placeholder="Password"
                      secureTextEntry={true} />
                    {this.state.isPass ? <Text style={Styles.errorText}>Error</Text>: null}
                </CardItem>
                  <Button block onPress={this.handleLogIn}> 
                    <Text>Log In</Text>
                  </Button>
              </Card>
            </View>
            <View style={Styles.containerTwo}>
              <Button transparent small onPress={this.handleForgetPassword}>
                <Text style={Styles.textUnderline}>Can't log in ?</Text>
              </Button>
            </View>
          </Content>
        </Container>
    )
  }
}

const mapStateToProps = state => {
  return {
    prod: state.auth
  }
}

const mapDispatchToProps = dispatch => {
  return {
      addUser: (FullName, Email, Password, isLogged) => {   
        dispatch(authAddUser(FullName, Email, Password, isLogged))
      }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)