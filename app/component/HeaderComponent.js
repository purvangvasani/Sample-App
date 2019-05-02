import React, {Component} from "react";
import { Header, Button, Left, Body, Right, Icon, Text } from 'native-base';
import { withNavigation } from 'react-navigation';

class HeaderComponent extends Component{
    render(){
        return(
            <Header style={{color: 'yellow'}}>
                <Left>
                    <Button onPress={() => this.props.navigation.openDrawer()} transparent>
                        <Icon name="menu" />
                    </Button>
                </Left>
                <Body>
                    <Text style={{color: 'white', fontWeight: 'bold'}}>
                        
                    </Text>
                </Body>
                <Right />
            </Header>
        )
    }
}

export default withNavigation(HeaderComponent);