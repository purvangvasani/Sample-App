import React, { Component } from 'react';
import { Text,
    View,} from 'react-native';
import { Button, Card, CardItem, Left, Right, Content } from 'native-base';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import Styles from './Styles';

class ContactCard extends Component {
    render(contact_name, contact_number){
        return(
            <View>
                <Card>
                    <CardItem>
                        <Left>
                            <Text style={Styles.contactCardName}>{this.props.contact_name}</Text>
                        </Left>
                        <Content>
                            <Text style={Styles.contactCardNumber}>{this.props.contact_number}</Text>
                        </Content>
                        {/* <Right>
                            <Button transparent onPress={this._toggleModal}>
                                <Icon name="trash" style={{fontSize : 20, color:'red'}} />
                            </Button>
                        </Right> */}
                    </CardItem>
                </Card>
            </View>
        )   
    }
}

export default ContactCard;