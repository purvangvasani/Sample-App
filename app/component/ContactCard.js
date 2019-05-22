import React, { Component } from 'react';
import { Text, View, TouchableOpacity} from 'react-native';
import { Button, Card, CardItem, Left, Right, Content, Thumbnail } from 'native-base';
import theme from '../../Theme/theme';

class ContactCard extends Component {
    render(contact_name, contact_number){
        return(
            <View>
                <Card style={theme.list}>
                    <CardItem>
                        <Content>
                            <View style={theme.thumbnail}>
                                <Text style={theme.thumbnailText}>{this.props.contact_name[0]}</Text>
                            </View>
                        </Content>
                        <Content>
                            <Text style={theme.listItems}>{this.props.contact_name}</Text>
                        </Content>
                        <Content>
                            <Text style={theme.listItems}>{this.props.contact_number}</Text>
                        </Content>
                        <Content>
                            <TouchableOpacity style={theme.button}>
                                <Text style={theme.buttonText}>Hey</Text>
                            </TouchableOpacity>
                        </Content>
                    </CardItem>
                </Card>
            </View>
        )   
    }
}

export default ContactCard;