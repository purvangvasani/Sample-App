import React, { Component } from 'react'
import {Keyboard, TextInput} from 'react-native'
import { Button, Container, Text, Content, Input, View, Card, CardItem } from 'native-base';
import {connect} from 'react-redux'
import Toast from 'react-native-easy-toast'

import {authAddUser} from '../../actions/Auth'
import Styles from './Styles'

class SignUpScreen extends Component {

  state = {
    id:0,
    isLogged: false,
    isEmail: false,
    isName: false,
    FullName: '',
    Email: '',
    Password: '',
    isPass: false
  }
  
  nameChangeHandler=(value)=>{
    if(value.length < 4){
      this.setState({
        FullName: '',
        isName: true,
      })  
    }
    else if(value.length > 4){
      this.setState({
        FullName: value,
        isName: false,
      })
    }
  }

  emailChangeHandler=(value)=>{
    var pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/; 

    if(pattern.test(value)){
      this.setState({
        Email: value,
        isEmail: false
      }) 
    }
    else if(!pattern.test(value)){
      this.setState({
        Email: '',
        isEmail: true
      }) 
    }
  }

  passwordChangeHandler=(value)=>{
    if(value.length <= 4){
      this.setState({
        Password: '',
        isPass: true,
      })  
    }
    else if(value.length > 4){
      this.setState({
        Password: value,
        isPass: false,
      })
    }
  }

  handleRegister=()=>{
    if(this.state.Email === '' || this.state.Password === '' || this.state.FullName === ''){
      alert("Please Fill all Fields..")
    }
    else{
      this.setState({
        id: this.state.id + 1
      })
      this.props.addUser(this.state.id, this.state.FullName, this.state.Email, this.state.Password, this.state.isLogged)
      this.refs.toast.show('Success, Go to Login Page.')
      this.handleClear()
    }
    Keyboard.dismiss();
  }

  handleClear=()=>{
    this.nameInput.clear()
    this.emailInput.clear()
    this.passwordInput.clear()
  }

  handleLogIn=()=>{
     this.props.navigation.navigate('Login')
  }

  render() {
    return (
        <Container>
          <Content padder>
            <View style={Styles.wrapper}>
              <Text style={Styles.headerText}> 
                Sign Up 
              </Text>
              <Text style={Styles.subHeadText}>
                By signing up, you accept our User Notice and Privacy Policy.
              </Text>
              <Card>
                <CardItem>
                    <TextInput
                      ref={input => { this.nameInput = input }}
                      onChangeText={this.nameChangeHandler}
                      style={Styles.inputText}
                      placeholder="Full Name" />
                    {this.state.isName ? <Text style={Styles.errorText}>Name is Short.</Text>: null}
                </CardItem>
                <CardItem>
                    <TextInput 
                      ref={input => { this.emailInput = input }}
                      onChangeText={this.emailChangeHandler}
                      style={Styles.inputText}
                      placeholder="Email" />
                    {this.state.isEmail ? <Text style={Styles.errorText}>Invalid Email </Text>: null}
                </CardItem>
                <CardItem>
                    <TextInput 
                      ref={input => { this.passwordInput = input }}
                      onChangeText={this.passwordChangeHandler}
                      style={Styles.inputText}
                      placeholder="Password"
                      secureTextEntry={true} />
                    {this.state.isPass ? <Text style={Styles.errorText}>Weak</Text> : null}
                </CardItem>
                  <Button block onPress={this.handleRegister}> 
                    <Text>Register</Text>
                  </Button>
              </Card>
            </View>
            <View style={Styles.wrapperOne}>
              <Text style={Styles.subHeadText}>Already have account? </Text>
              <Button transparent small onPress={this.handleLogIn}>
                <Text style={Styles.textUnderline}>Sign In</Text>
              </Button>
            </View>
            <Toast
                ref="toast"
                style={Styles.toastBackgroundColor}
                position='bottom'
                positionValue={200}
                fadeInDuration={200}
                fadeOutDuration={500}
                opacity={0.9}
                textStyle={Styles.toastFontStyle}
              />
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
      addUser: (id, FullName, Email, Password, isLogged) => {      
            dispatch(authAddUser(id, FullName, Email, Password, isLogged))
      }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpScreen)