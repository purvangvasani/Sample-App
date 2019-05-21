import React, { Component } from 'react';
import { Text, TextInput } from 'react-native';
import { Container, Content, Button } from 'native-base';
import {connect} from 'react-redux'

import {addContactInfo} from '../../actions/contact'

import Styles from './Styles';
import theme from '../../Theme/theme';
import { validateName, validateNumber } from './validate';

class AddContactList extends Component {

    state={
        ContactName: '',
        ContactNumber: ''
    }

    handleAddEvent=()=>{
        validateName(this.state.ContactName);
        if(!validateName(this.state.ContactName)){
            alert("Name cannot be empty..")
        }
        else {
            let resp = validateNumber(this.state.ContactNumber);
            if(resp === 1){
                alert("Number cannot be empty..")
            }
            else if(resp === 2){
                alert("Number must contain 10 digits..")
            }
            else if(resp === 0){
                alert("Success!!")
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
                    <Button style={[theme.btnDanger,{padding: 15}]} onPress={this.handleAddEvent}> 
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
