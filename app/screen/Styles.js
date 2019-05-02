import {StyleSheet} from 'react-native'

const Styles = StyleSheet.create({
    containerOne: {
        flex: 1,
        padding: 10
    },
    containerTwo:{
        flex:2, 
        padding: 10,
        flexDirection: 'row', 
        justifyContent:'flex-end', 
        paddingTop: 10
    },
    headText: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        color: '#3C53B4',
        fontWeight: 'bold',
    },
    subHeadText: {
        fontSize: 14,
        paddingBottom: 35,
        textAlign: 'center',
        color: '#3C53B4',
        marginBottom: 5,
    },
    inputText:{
        color: '#3C53B4'
    },
    textUnderline: {
        textDecorationLine: 'underline'
    },
    errorText: {
        flex: 1,
        color: 'red',
        textAlign: 'right',
    },
    successText: {
        flex: 1,
        color: 'green',
        textAlign: 'right',
    }
})

export default Styles