import React, { Component } from 'react'
import { View, TextInput, Keyboard } from 'react-native'
import {connect} from 'react-redux'

import Styles from './Styles'
import { Container, Content, Text, Card, CardItem, Button, Label, Left, Grid, Row, Col } from 'native-base';

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
            <View style={Styles.wrapper}>
              <Text style={Styles.headerText}> 
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
            <View style={Styles.wrapper}>
            {this.state.isEnable ? 
            <Card padder>
              <CardItem>
                <Left>
                  <Text style={Styles.headerText}>Account Information</Text>
                </Left>
              </CardItem>
              <CardItem>
                <Grid>
                  <Row>
                    <Grid>
                      <Col>
                        <Label style={Styles.labelText}>
                          Full Name :
                        </Label>
                      </Col>
                      <Col>
                        <Label style={Styles.labelText}>
                          {this.props.prod.FullName}
                        </Label>
                      </Col>
                    </Grid>
                  </Row>
                  <Row>
                    <Grid>
                      <Col>
                        <Label style={Styles.labelText}>
                          Email :
                        </Label>
                      </Col>
                      <Col>
                        <Label style={Styles.labelText}>
                          {this.props.prod.Email}
                        </Label>
                      </Col>
                    </Grid>
                  </Row>
                  <Row>
                    <Grid>
                      <Col>
                        <Label style={Styles.labelText}>
                          Password :
                        </Label>
                      </Col>
                      <Col>
                        <Label style={Styles.labelText}>
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

const mapStateToProps = state => {
  return {
    prod: state.auth
  }
}

export default connect(mapStateToProps)(ForgetPasswordScreen)