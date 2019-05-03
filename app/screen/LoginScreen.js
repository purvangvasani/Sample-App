import React, { Component } from 'react'
import { View, TextInput, Alert } from 'react-native'
import {connect} from 'react-redux'
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';

import {authUpdateUser} from '../../actions/Auth'

import Styles from './Styles'
import { Container, Content, Text, Card, CardItem, Button, Col, Grid } from 'native-base';

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
    for(let i = 0; i< this.props.prod.length; i++){
      if(this.state.Email === '' || this.state.Password === ''){
        alert("Please Fill all Fields...")
      }
      else if(this.state.Email === this.props.prod[i].Email){
        if(this.state.Password === this.props.prod[i].Password){
          this.setState({
            isLogged: true
          })
          this.props.updateUser(this.props.prod[i].id, this.props.prod[i].FullName, this.props.prod[i].Email, this.props.prod[i].Password, true)
          alert("Successfully Logged In")
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

  handleInfo=()=>{
    Alert.alert("Use our Default Credentials", "Email: root@root.com, Password: root1")
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
            <View style={Styles.wrapper}>
              <Grid>
                <Col size={75}>
                  <Text style={Styles.headerText}> 
                    Log in to your account
                  </Text>
                </Col>
                <Col size={25}>
                  <Button transparent onPress={this.handleInfo}>
                    <Icon name="information-outline" style={Styles.iconLoginInfo}/>
                  </Button>
                </Col>
              </Grid>
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
            <View style={Styles.wrapperOne}>
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
    prod: state.auth.users
  }
}

const mapDispatchToProps = dispatch => {
  return {
      updateUser: (id, FullName, Email, Password, isLogged) => {   
        dispatch(authUpdateUser(id, FullName, Email, Password, isLogged))
      }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)