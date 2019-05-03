import React, {Component} from "react";
import { Header, Button, Left, Body, Right, Icon, Text } from 'native-base';
import { withNavigation } from 'react-navigation';
import Styles from "./Styles";

class HeaderComponent extends Component{
    render(){
        return(
            <Header>
                <Left>
                    <Button onPress={() => this.props.navigation.openDrawer()} transparent>
                        <Icon name="menu" />
                    </Button>
                </Left>
                <Body>
                    <Text style={Styles.headerTextStyle}>
                        {this.props.title}
                    </Text>
                </Body>
                <Right />
            </Header>
        )
    }
}

export default withNavigation(HeaderComponent);