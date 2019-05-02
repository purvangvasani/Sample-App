import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Container, Content, Button } from 'native-base';
import {connect} from 'react-redux'

import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {authAddUser} from '../../actions/Auth'

import Styles from './Styles'
import HeaderComponent from '../component/HeaderComponent';

class HomeScreen extends Component {

  static navigationOptions = {
    drawerIcon: ({ tintColor }) => (
        <Icon name="home" style={{fontSize : 24, color:tintColor}} />
    )
  }

  handleLogout=()=>{
    this.props.addUser(this.props.prod.FullName, this.props.prod.Email, this.props.prod.Password, false)
    this.props.navigation.navigate('Home')
  }

  render() {
    if(this.props.prod.isLogged){
      return (
        <Container>
          <HeaderComponent />
          <Content padder>
            <View style={Styles.containerOne}>
              <Text style={Styles.headText}>Welcome, {this.props.prod.FullName} </Text>
            </View>
            <View> 
              <Button block onPress={this.handleLogout}>
                <Text style={{fontSize: 17, fontWeight: 'bold', color: 'white'}}>Logout</Text>
              </Button>
            </View>
          </Content>
        </Container>
      )
    }
    else{
      return (
        <Container>
          <HeaderComponent />
          <Content padder>
            <View style={Styles.containerOne}>
              <Text style={Styles.headText}>Home Screen </Text>
            </View>
          </Content>
        </Container>
      )
    }
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
export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)