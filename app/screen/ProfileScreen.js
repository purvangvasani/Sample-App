import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import { Container, Content, Thumbnail, Card, CardItem, Body, Label, Left, Button } from 'native-base';
import HeaderComponent from '../component/HeaderComponent'
import ContactScreen from './ContactScreen';
import Styles from './Styles';
import {title} from '../constants/constTitles'
import theme from '../../Theme/theme';

class ProfileScreen extends Component {
    
    static navigationOptions = {
        drawerIcon: ({ tintColor }) => (
            <Icon name="face-profile" style={{fontSize : 24, color:tintColor}} />
        )
    }

    render() {
        return (
            <Container>
                <HeaderComponent title={title.Profile}/>
                <Content>
                    <View>
                        <View style={Styles.profileHeaderView}>
                            <Text style={[theme.headerText,{top:43}]}>  Purvang </Text>
                        </View>
                        <View style={Styles.profileHeaderIconView}> 
                            <Thumbnail source={require('../images/user_profile.png')} style={Styles.profileHeaderIconStyle}/>
                        </View>
                        <View>
                            <ContactScreen />
                        </View>
                    </View>
                </Content>
            </Container>
        )
    }
}

export default ProfileScreen
