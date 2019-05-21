import {StyleSheet} from 'react-native'
import {variable} from './variable'

const theme = StyleSheet.create({
    //   Button Style
    btnPrimary:{
        backgroundColor: variable.btnPrimary,
    },
    btnSuccess:{
        backgroundColor: variable.btnSuccess,
    },
    btnWarning:{
        backgroundColor: variable.btnWarning,
    },
    btnDanger:{
        backgroundColor: variable.btnDanger,
    },
    btnDark:{
        backgroundColor: variable.btnDark,
    },
    btnInfo:{
        backgroundColor: variable.btnInfo,
    },
    btnLight:{
        backgroundColor: variable.btnLight,
    },

    iconPrimary:{
        color: variable.btnPrimary
    },
    iconSuccess:{
        color: variable.btnSuccess
    },
    iconWarning:{
        color: variable.btnWarning
    },
    iconDanger:{
        color: variable.btnDanger
    },
    iconDark:{
        color: variable.btnDark
    },
    iconInfo:{
        color: variable.btnInfo
    },
    iconLight:{
        color: variable.btnLight
    },


    listItems:{
        marginTop: variable.marginTop_10,
        marginRight: variable.marginRight_30,
        fontSize: variable.fontMedium,
        fontWeight: variable.fontWeightBold
    },
    errorText: {
        color: variable.errorText,
        textAlign: variable.alignRight,
        flex: 1,
        fontSize: variable.fontMedium,
    },
    successText: {
        flex: 1,
        color: variable.successText,
        textAlign: variable.alignRight,
    },
    textInputStyle: {
        fontSize:variable.fontMedium,
    },
    labelText:{
        fontSize: variable.h4,
        fontWeight: 'bold',
    },
    headerText: {
        fontSize: variable.fontLarge,
        textAlign: variable.alignCenter,
        margin: 10,
        color: variable.titleFontColor,
        fontWeight: 'bold',
    },
    subHeadText: {
        fontSize: variable.subtitleFontSize,
        paddingBottom: 35,
        textAlign: variable.alignCenter,
        color: variable.subtitleFontColor,
        marginBottom: 5,
    },
    h1:{
        fontSize: variable.h1,
    },
    h2:{
        fontSize: variable.h2,
    },
    h3:{
        fontSize: variable.h3,
    },
    h4:{
        fontSize: variable.h4,
    },
    h5:{
        fontSize: variable.h5,
    },
    h6:{
        fontSize: variable.h6,
    },
})

export default theme;