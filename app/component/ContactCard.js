import React, { Component } from 'react';
import { Text, View} from 'react-native';
import { Button, Card, CardItem, Left, Right, Content } from 'native-base';
import theme from '../../Theme/theme';

class ContactCard extends Component {
    render(contact_name, contact_number){
        return(
            <View>
                <Card>
                    <CardItem>
                        <Left>
                            <Text style={theme.listItems}>{this.props.contact_name}</Text>
                        </Left>
                        {/* <Content>
                            <Text style={theme.listItems}>{this.props.contact_number}</Text> 
                        </Content> */}
                        <Right>
                            <Text style={theme.listItems}>{this.props.contact_number}</Text>
                        </Right>
                    </CardItem>
                </Card>
            </View>
        )   
    }
}

export default ContactCard;