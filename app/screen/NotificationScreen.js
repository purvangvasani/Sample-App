import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Container, Content } from 'native-base';
import HeaderComponent from '../component/HeaderComponent';
import {title} from '../constants/constTitles';
import Notifications from '../component/Notifications';

export class NotificationScreen extends Component {
    render() {
        return (
            <Container>
                <HeaderComponent title={title.Notification}/>
                <Content padder>
                    <Notifications />
                </Content>
            </Container>
        )
    }
}

export default NotificationScreen
