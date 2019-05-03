import React, { Component } from 'react';
import { Text, TextInput } from 'react-native';
import { Container, Content, Button } from 'native-base';
import {connect} from 'react-redux'

import {addContactInfo} from '../../actions/contact'

import Styles from './Styles';

class AddContactList extends Component {

    state={
        ContactName: '',
        ContactNumber: ''
    }

    handleAddEvent=()=>{
        if(this.state.ContactName === ''){
            alert("Name cannot be empty..")
        }
        else if(this.state.ContactNumber === ''){
            alert("Number cannot be empty..")
        }
        else{
            if(this.state.ContactNumber.length != 10){
                alert("The Number must be of 10 digits...")
            }
            else{
                this.props.addContact(this.state.ContactName, this.state.ContactNumber)
                this.handleClear();
            }
        }
    }

    handleClear=()=>{
        this.nameInput.clear()
        this.numberInput.clear()
    }

    handleNameChange =(value)=>{
        this.setState({
            ContactName: value
        })
    }

    handleNumberChange =(value)=>{
        this.setState({
            ContactNumber: value
        })
    }

    render() {
        return (
            <Container>
                <Content padder>
                    <TextInput 
                        ref={input => { this.nameInput = input }}
                        onChangeText={this.handleNameChange}
                        style={Styles.addContactTextInput}
                        placeholder = "Contact Name"/>
                    <TextInput 
                        ref={input => { this.numberInput = input }}
                        onChangeText={this.handleNumberChange}
                        style={Styles.addContactTextInput}
                        placeholder = "Contact Number"/>
                    <Button style={Styles.addContactButtonView} onPress={this.handleAddEvent}> 
                        <Text style={Styles.addContactButtonText}>Add</Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}

const mapStateToProps = state => {
    return {
        prod: state.contact.Contacts
    }
}
  
const mapDispatchToProps = dispatch => {
    return {
        addContact: (ContactName, ContactNumber) => {      
            dispatch(addContactInfo(ContactName, ContactNumber))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddContactList);
