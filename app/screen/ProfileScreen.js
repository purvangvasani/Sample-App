import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import { Container, Content, Thumbnail, Card, CardItem, Body, Label, Left, Button } from 'native-base';
import HeaderComponent from '../component/HeaderComponent'
import ContactScreen from './ContactScreen';

class ProfileScreen extends Component {
    
    static navigationOptions = {
        drawerIcon: ({ tintColor }) => (
            <Icon name="face-profile" style={{fontSize : 24, color:tintColor}} />
        )
    }

    render() {
        return (
            <Container>
                <HeaderComponent />
                <Content>
                    <View>
                        <View style={{ alignItems: 'center', backgroundColor: 'lightskyblue', height: 80, }}>
                            <Text style={{fontSize:20, fontWeight: 'bold', top: 50}}>  Purvang </Text>
                        </View>
                        <View style={{left: 20, top: -30}}> 
                                <Thumbnail source={require('../images/user_profile.png')} style={{width: 60, height: 60}}/>
                        </View>
                        <View>
                            <ContactScreen />
                            {/* <Button style={{padding: 10}} rounded info>
                                <Text style={{ fontWeight: 'bold',}}>Contact Book</Text>
                            </Button> */}
                        </View>
                    </View>
                </Content>
            </Container>
        )
    }
}

export default ProfileScreen
