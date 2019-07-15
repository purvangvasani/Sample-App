import React, { Component } from 'react'
import { View, TextInput, Keyboard } from 'react-native'
import {connect} from 'react-redux'

import Styles from './Styles'
import { Container, Content, Text, Card, CardItem, Button, Label, Left, Grid, Row, Col } from 'native-base';
import theme from '../../Theme/theme';
import { validateEmail } from '../component/validate';

class ForgetPasswordScreen extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      isEnable: false,
      error: false,
      email: '',
      Email: '',
      FullName: '',
      Password: ''
    }
  }

  handleSubmit=()=>{
    for(let i = 0; i< this.props.prod.length; i++){
      if(this.state.Email === this.props.prod[i].Email){
        this.setState({
          isEnable: !this.state.isEnable,
          FullName: this.props.prod[i].FullName,
          Email: this.props.prod[i].Email,
          Password: this.props.prod[i].Password,
        })
      }
    }
    alert("Email not found")
    // if(this.state.email == ''){
    //   alert("Please enter Email")
    // }
    // else if(this.state.email === this.props.prod.Email){
    //   this.setState({
    //     isEnable: !this.state.isEnable
    //   })
    //   Keyboard.dismiss()
    //   this.emailInput.clear()
    // }
  }

  handleEmailChange=(value)=>{
    let resp = validateEmail(value);

    if(resp == 'true'){
      this.setState({
        email: value,
        error: false,
      })
    }
    else{
      this.setState({
        error: true,
        email: '',
      })
    }
  }

  handleBack=()=>{
    this.setState({
      isEnable: false
    })
    this.props.navigation.navigate('Login')
  }

  render() {
    return (
      <Container>
          <Content padder>
            <View style={Styles.wrapper}>
              <Text style={theme.headerText}> 
                Reset your Password
              </Text>
              <Card>
                <CardItem>
                    <TextInput 
                      ref={input => { this.emailInput = input }}
                      onChangeText={this.handleEmailChange}
                      name="email"
                      style={theme.textInputStyle}
                      placeholder="Enter Email Address" />

                    {this.state.error ? <Text style={theme.errorText}>Invalid Email</Text>: null}
                </CardItem>
                  <Button style={theme.btnPrimary} block onPress={this.handleSubmit}> 
                    <Text>Submit</Text>
                  </Button>
              </Card>
            </View>
            <View style={Styles.wrapper}>
            {this.state.isEnable ? 
            <Card padder>
              <CardItem>
                <Left>
                  <Text style={theme.headerText}>Account Information</Text>
                </Left>
              </CardItem>
              <CardItem>
                <Grid>
                  <Row>
                    <Grid>
                      <Col>
                        <Label style={theme.labelText}>
                          Full Name :
                        </Label>
                      </Col>
                      <Col>
                        <Label style={theme.labelText}>
                          {this.state.FullName}
                        </Label>
                      </Col>
                    </Grid>
                  </Row>
                  <Row>
                    <Grid>
                      <Col>
                        <Label style={theme.labelText}>
                          Email :
                        </Label>
                      </Col>
                      <Col>
                        <Label style={theme.labelText}>
                          {this.state.Email}
                        </Label>
                      </Col>
                    </Grid>
                  </Row>
                  <Row>
                    <Grid>
                      <Col>
                        <Label style={theme.labelText}>
                          Password :
                        </Label>
                      </Col>
                      <Col>
                        <Label style={theme.labelText}>
                          {this.state.Password}
                        </Label>
                      </Col>
                    </Grid>
                  </Row>
                </Grid>
              </CardItem>
              <CardItem>
                <Button style={theme.btnDanger} onPress={this.handleBack}>
                  <Text>Back to Login</Text>
                </Button>
              </CardItem>
            </Card> :
              null }
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

export default connect(mapStateToProps)(ForgetPasswordScreen)