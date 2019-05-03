import React, { Component } from 'react';
import { Container, Tabs, Tab, TabHeading } from 'native-base';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import AddContactTab from '../component/AddContactTab'
import ContactListTab from '../component/ContactListTab'

class ContactScreen extends Component {
    render() {
        return (
            <Container>
                <Tabs>
                    <Tab heading={ <TabHeading><Icon name="address-book-o" size={26} /></TabHeading>}>
                        <ContactListTab />
                    </Tab>
                    <Tab heading={ <TabHeading><Icon name="plus" size={26} /></TabHeading>}>
                        <AddContactTab />
                    </Tab>
                </Tabs>
            </Container>
        );
    } 
}

export default ContactScreen;