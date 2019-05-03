import React, { Component } from 'react';
import { connect } from 'react-redux';
import {ScrollView, View} from 'react-native'
import ContactCard from './ContactCard'
import { Container, Content } from 'native-base';

class ContactListTab extends Component {

    renderContactCard=()=> {
        return this.props.prod.Contacts.map((cont, index) =>
            <ContactCard
                style={{height: 500}}
                key={index}
                contact_name={cont.ContactName}
                contact_number={cont.ContactNumber}
            />
        )
    };

    render() {
        return (
            <View>
                <ScrollView>
                    <Container>
                        <Content padder>
                            {this.renderContactCard()}
                        </Content>
                    </Container>
                </ScrollView>
            </View>
        );
    }
}

const mapStateToProps = state => {
    return {
        prod: state.contact
    }
}

export default connect(mapStateToProps)(ContactListTab);