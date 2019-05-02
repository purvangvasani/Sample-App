import React, { Component } from 'react'
import { View, StyleSheet, TextInput, Keyboard } from 'react-native'
import {connect} from 'react-redux'

import {authAddUser} from '../../actions/Auth'
import Styles from './Styles'
import { Container, Content, Text, Card, CardItem, Input, Button, Label, Left, Grid, Row, Col } from 'native-base';

class ForgetPasswordScreen extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      isEnable: false,
      error: false,
      email: '',
    }
  }

  handleSubmit=()=>{
    if(this.state.email == ''){
      alert("Please enter Email")
    }
    else if(this.state.email === this.props.prod.Email){
      this.setState({
        isEnable: !this.state.isEnable
      })
      Keyboard.dismiss()
      this.emailInput.clear()
    }
  }

  handleEmailChange=(value)=>{
    var pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/; 

    if(pattern.test(value)){
      this.setState({
        email: value,
        error: false,
      })
    }else{
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
            <View style={Styles.containerOne}>
              <Text style={Styles.headText}> 
                Reset your Password
              </Text>
              <Card>
                <CardItem>
                    <TextInput 
                      ref={input => { this.emailInput = input }}
                      onChangeText={this.handleEmailChange}
                      name="email"
                      style={Styles.inputText}
                      placeholder="Enter Email Address" />

                    {this.state.error ? <Text style={Styles.errorText}>Error</Text>: null}
                </CardItem>
                  <Button block onPress={this.handleSubmit}> 
                    <Text>Submit</Text>
                  </Button>
              </Card>
            </View>
            <View style={Styles.containerOne}>
            {this.state.isEnable ? 
            <Card padder>
              <CardItem>
                <Left>
                  <Text style={{fontSize: 20, fontWeight: 'bold',color: '#3C53B4'}}>Account Information</Text>
                </Left>
              </CardItem>
              <CardItem>
                <Grid>
                  <Row>
                    <Grid>
                      <Col>
                        <Label style={{fontSize: 18}}>
                          Full Name :
                        </Label>
                      </Col>
                      <Col>
                        <Label style={{fontSize:18, fontWeight:'bold'}}>
                          {this.props.prod.FullName}
                        </Label>
                      </Col>
                    </Grid>
                  </Row>
                  <Row>
                    <Grid>
                      <Col>
                        <Label style={{fontSize: 18}}>
                          Email :
                        </Label>
                      </Col>
                      <Col>
                        <Label style={{fontSize:18, fontWeight:'bold'}}>
                          {this.props.prod.Email}
                        </Label>
                      </Col>
                    </Grid>
                  </Row>
                  <Row>
                    <Grid>
                      <Col>
                        <Label style={{fontSize: 18}}>
                          Password :
                        </Label>
                      </Col>
                      <Col>
                        <Label style={{fontSize:18, fontWeight:'bold'}}>
                          {this.props.prod.Password}
                        </Label>
                      </Col>
                    </Grid>
                  </Row>
                </Grid>
              </CardItem>
              <CardItem>
                <Button onPress={this.handleBack}>
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

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
});

const mapStateToProps = state => {
  return {
    prod: state.auth
  }
}

export default connect(mapStateToProps)(ForgetPasswordScreen)