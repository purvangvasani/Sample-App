import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Container, Content, Button } from 'native-base';
import {connect} from 'react-redux'

import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {authAddUser} from '../../actions/Auth'
import {title} from '../constants/constTitles'
import Styles from './Styles'
import HeaderComponent from '../component/HeaderComponent';

class HomeScreen extends Component {

  state={
    isLogged: false
  }

  static navigationOptions = {
    drawerIcon: ({ tintColor }) => (
        <Icon name="home" style={{fontSize : 24, color:tintColor}} />
    )
  }

  // handleLogout=()=>{
  //   this.props.addUser(this.props.prod.FullName, this.props.prod.Email, this.props.prod.Password, false)
  //   this.props.navigation.navigate('Home')
  // }

  render() {
    if(this.state.isLogged){
      return (
        <Container>
          <HeaderComponent title={title.Home}/>
          <Content padder>
            <View style={Styles.wrapper}>
              <Text style={Styles.headerText}>Welcome, </Text>
            </View>
            <View> 
              <Button block onPress={this.handleLogout}>
                <Text style={Styles.buttonLogoutStyle}>Logout</Text>
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
            <View style={Styles.wrapper}>
              <Text style={Styles.headerText}>Home Screen </Text>
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