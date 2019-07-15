import React, {Component} from "react";
import {View} from "react-native";
import { Header, Button, Left, Body, Right, Icon, Text, Content } from 'native-base';
import { withNavigation } from 'react-navigation';
import Styles from "./Styles";
import theme from "../../Theme/theme";

class HeaderComponent extends Component{
    render(){
        return(
            <Header>
                <View style={{flex:1, flexDirection: 'row'}}>
                    <View style={{alignItems: 'flex-start'}}>
                        <Left>
                            <Button onPress={() => this.props.navigation.openDrawer()} transparent>
                                <Icon name="menu" />
                            </Button>
                        </Left>
                    </View>
                    <View style={{alignItems:'center'}}>
                            <Text style={theme.headerText}>
                                {this.props.title}
                            </Text>
                    </View>
                    <Right />
                </View>
            </Header>
        )
    }
}

export default withNavigation(HeaderComponent);