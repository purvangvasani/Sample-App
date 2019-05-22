import React, { Component } from 'react'
import {Keyboard, TextInput} from 'react-native'
import { Container, Button, Text, Content, Input, View, Card, CardItem } from 'native-base';
import {connect} from 'react-redux'
import Toast from 'react-native-easy-toast'
import {authAddUser} from '../../actions/Auth'
import Styles from './Styles'
import theme from '../../Theme/theme';
import { variable } from '../../Theme/variable';
import { validateName, validateEmail, validatePassword, required } from '../component/validate';

class SignUpScreen extends Component {

  state = {
    id:0,
    isLogged: false,
    isEmail: false,
    isName: false,
    FullName: '',
    Email: '',
    Password: '',
    isPass: false,
    errName: '',
    errEmail: '',
    errPass:''
  }
  
  nameChangeHandler=(value)=>{
    let resp = validateName(value)
    if(resp != 'true'){
      this.setState({
        FullName: '',
        isName: true,
        errName: resp
      })
    }
    else{
      this.setState({
        FullName: value,
        isName: false,
        errName: ''
      })
    }
  }

  emailChangeHandler=(value)=>{
    let resp = validateEmail(value);
    if(resp != 'true'){
      this.setState({
        Email: '',
        isEmail: true,
        errEmail: resp
      }) 
    }
    else{
      this.setState({
        Email: value,
        isEmail: false,
        errEmail: ''
      }) 
    }
  }

  passwordChangeHandler=(value)=>{
    let resp = validatePassword(value)
    if(resp != 'true'){
      this.setState({
        Password: '',
        isPass: true,
        errPass: resp
      })
    }
    else{
      this.setState({
        Password: value,
        isPass: false,
        errPass: ''
      })
    }
  }

  handleRegister=()=>{
    if(this.state.FullName === '' || this.state.Email === '' || this.state.Password === ''){
      alert('Fill all the fields')
    }
    else {
      this.setState({
        id: this.state.id + 1
      })
      this.props.addUser(this.state.id, this.state.FullName, this.state.Email, this.state.Password, this.state.isLogged)
      // this.refs.toast.show('Success, Go to Login Page.')
      alert('Success, Go to Login Page.')
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

  handleNameRequired=()=>{
    let resp = required(this.state.FullName)
    if(resp != 'true'){
      this.setState({
        FullName: '',
        isName: true,
        errName: resp
      })
    }
  }

  handleEmailRequired=()=>{
    let resp = required(this.state.Email)
    if(resp != 'true'){
      this.setState({
        Email: '',
        isEmail: true,
        errEmail: resp
      })
    }
  }

  handlePassRequired=()=>{
    let resp = required(this.state.Password)
    if(resp != 'true'){
      this.setState({
        Password: '',
        isPass: true,
        errPass: resp
      })
    }
  }

  render() {
    return (
        <Container>
          <Content padder>
            <View>
              <Text style={theme.headerText}> 
                Sign Up 
              </Text>
              <Text style={theme.subHeadText}>
                By signing up, you accept our User Notice and Privacy Policy.
              </Text>
              <Card>
                <CardItem>
                    <TextInput
                      onBlur={this.handleNameRequired}
                      ref={input => { this.nameInput = input }}
                      onChangeText={this.nameChangeHandler}
                      style={theme.textInputStyle}
                      placeholder="Full Name" />
                    {this.state.isName ? <Text style={theme.errorText}>{this.state.errName}.</Text>: null}
                </CardItem>
                <CardItem>
                    <TextInput 
                      onBlur={this.handleEmailRequired}
                      ref={input => { this.emailInput = input }}
                      onChangeText={this.emailChangeHandler}
                      style={theme.textInputStyle}
                      placeholder="Email" />
                    {this.state.isEmail ? <Text style={theme.errorText}>{this.state.errEmail} </Text>: null}
                </CardItem>
                <CardItem>
                    <TextInput 
                      onBlur={this.handlePassRequired}
                      ref={input => { this.passwordInput = input }}
                      onChangeText={this.passwordChangeHandler}
                      style={theme.textInputStyle}
                      placeholder="Password"
                      secureTextEntry={true} />
                    {this.state.isPass ? <Text style={theme.errorText}>{this.state.errPass}</Text> : null}
                </CardItem>
                  <Button 
                    style={{color: "#3F51B5"}} block 
                    onPress={this.handleRegister}
                    
                  > 
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
                style={{backgroundColor: variable.cSuccess}}
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