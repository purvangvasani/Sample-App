import React, { Component } from 'react'
import {Keyboard, TextInput} from 'react-native'
import { Container, Button, Text, Content, Input, View, Card, CardItem } from 'native-base';
import {connect} from 'react-redux'
import Toast from 'react-native-easy-toast'
import {authAddUser} from '../../actions/Auth'
import Styles from './Styles'
import theme from '../../Theme/theme';
import { variable } from '../../Theme/variable';
import { validateName, validateEmail, validatePassword } from '../component/validate';

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
    if(!validateName(value)){
      this.setState({
        FullName: '',
        isName: true,
      })
    }
    else{
      this.setState({
        FullName: value,
        isName: false,
      })
    }
  }

  emailChangeHandler=(value)=>{
    
    let resp = validateEmail(value);
    
    if(resp === 0){
      this.setState({
        Email: '',
        isEmail: true
      }) 
    }
    else if(resp === 1){
      this.setState({
        Email: value,
        isEmail: false
      }) 
    }
    // var pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/; 

    // if(pattern.test(value)){
    //   this.setState({
    //     Email: value,
    //     isEmail: false
    //   }) 
    // }
    // else if(!pattern.test(value)){
    //   this.setState({
    //     Email: '',
    //     isEmail: true
    //   }) 
    // }
  }

  passwordChangeHandler=(value)=>{
    if(!validatePassword(value)){
      this.setState({
        Password: '',
        isPass: true,
      })
    }
    else{
      this.setState({
        Password: value,
        isPass: false,
      })
    }
  }

  handleRegister=()=>{
    
    this.setState({
      id: this.state.id + 1
    })
    this.props.addUser(this.state.id, this.state.FullName, this.state.Email, this.state.Password, this.state.isLogged)
    // this.refs.toast.show('Success, Go to Login Page.')
    alert('Success, Go to Login Page.')
    this.handleClear()
    
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
                      ref={input => { this.nameInput = input }}
                      onChangeText={this.nameChangeHandler}
                      style={theme.textInputStyle}
                      placeholder="Full Name" />
                    {this.state.isName ? <Text style={theme.errorText}>Name required.</Text>: null}
                </CardItem>
                <CardItem>
                    <TextInput 
                      ref={input => { this.emailInput = input }}
                      onChangeText={this.emailChangeHandler}
                      style={theme.textInputStyle}
                      placeholder="Email" />
                    {this.state.isEmail ? <Text style={theme.errorText}>Invalid Email </Text>: null}
                </CardItem>
                <CardItem>
                    <TextInput 
                      ref={input => { this.passwordInput = input }}
                      onChangeText={this.passwordChangeHandler}
                      style={theme.textInputStyle}
                      placeholder="Password"
                      secureTextEntry={true} />
                    {this.state.isPass ? <Text style={theme.errorText}>Weak</Text> : null}
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