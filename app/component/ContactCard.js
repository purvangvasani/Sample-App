import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import { Thumbnail } from 'native-base';

const styles = StyleSheet.create({
    container: {
        display: "flex",
        marginBottom: 10,
        borderBottomColor: "#e5e5e5",
        borderBottomWidth: 3,
        padding: 20
    },
    upperRow: {
        display: "flex",
        flexDirection: "row",
        marginBottom: 10
    },
    coinName: {
        marginTop: 10,
        marginLeft: 30,
        marginRight: 20,
        fontSize: 16,
        fontWeight: 'bold'
    },
    coinPrice: {
        marginTop: 10,
        marginLeft: "auto",
        marginRight: 30,
        fontSize: 16,
        fontWeight: "bold",
    }
})

const ContactCard = ({contact_name, contact_number}) => {
    return(
        <View style={styles.container}>
            <View style={styles.upperRow}>
                <Text style={styles.coinName}>{contact_name}</Text>
                <Text style={styles.coinPrice}>{contact_number}</Text>
            </View>
        </View> 
    )
}

export default ContactCard;