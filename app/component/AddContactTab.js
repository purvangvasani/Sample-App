import React, { Component } from 'react';
import { Text, TextInput } from 'react-native';
import { Container, Content, Input, Label, Button } from 'native-base';
import {connect} from 'react-redux'
import {addContactInfo} from '../../actions/contact'

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
                        style={{borderWidth: 1, borderColor: 'lightgrey', marginBottom: 5,}}
                        placeholder = "Contact Name"/>
                    <TextInput 
                        ref={input => { this.numberInput = input }}
                        onChangeText={this.handleNumberChange}
                        style={{borderWidth: 1, borderColor: 'lightgrey',marginBottom: 5,}}
                        placeholder = "Contact Number"/>
                    <Button style={{paddingLeft: 15, paddingRight: 15}} onPress={this.handleAddEvent}> 
                        <Text style={{color: 'white', fontWeight: 'bold',}}>Add</Text>
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
