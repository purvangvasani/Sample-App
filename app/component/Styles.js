import {StyleSheet} from 'react-native'

const Styles = StyleSheet.create({
    addContactTextInput: {
        borderWidth: 1, 
        borderColor: 'lightgrey', 
        marginBottom: 5,
    },
    addContactButtonView: {
        paddingLeft: 15, 
        paddingRight: 15
    },
    addContactButtonText: {
        color: 'white', 
        fontWeight: 'bold',
    },
    contactCardName: {
        marginTop: 10,
        marginLeft: 30,
        marginRight: 30,
        fontSize: 16,
        fontWeight: 'bold'
    },
    contactCardNumber: {
        marginTop: 10,
        marginLeft: "auto",
        marginRight: 30,
        fontSize: 16,
        fontWeight: 'bold',
    },
    headerTextStyle: {
        color: 'white', 
        fontWeight: 'bold'
    },
})

export default Styles