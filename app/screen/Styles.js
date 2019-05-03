import {StyleSheet} from 'react-native'

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#3C53B4',
        paddingBottom: 80
    },
    containerOne: {
        flex: 1,
        justifyContent: 'center',
        paddingTop: 100,
        backgroundColor: '#3C53B4',
        alignItems: 'center',
        paddingBottom: 80
    },
    imageAppLogo: {
        width: 200,
        height: 200
    },
    appTitle:{
        color:"white",
        fontSize: 27,
        paddingTop:40,
        fontWeight: 'bold',
    },
    containerTwo: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: '#3C53B4',
    },
    buttonPosition: {
        paddingLeft: 35, 
        paddingRight: 35,
        paddingBottom: 20,
    },
    buttonLogInText:{
        fontSize: 17,
        color: '#3C53B4',
        fontWeight: 'bold',
    },
    buttonLoginStyle:{
        borderWidth: 1, 
        borderColor: 'white',
    },
    buttonLogoutStyle:{
        fontSize: 17, 
        fontWeight: 'bold', 
        color: 'white'
    },
    buttonSignUpText:{
        fontSize: 17,
        fontWeight: 'bold',
    },
    wrapper: {
        flex: 1,
        padding: 10
    },
    headerText: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        color: '#3C53B4',
        fontWeight: 'bold',
    },
    inputText:{
        color: '#3C53B4'
    },
    errorText: {
        flex: 1,
        color: 'red',
        textAlign: 'right',
    },
    labelText:{
        fontWeight:'bold',
        fontSize: 18
    },
    galleryCardText:{
        fontSize: 18, 
        fontWeight: 'bold', 
        color: '#3C53B4',
    },  
    galleryImageStyle:{
        height: 300, 
        flex: 1
    },
    galleryIconStyle:{
        color: '#ED4A6A'
    },
    galleryLayoutText:{
        fontSize: 18, 
        fontWeight: 'bold', 
        color: '#3C53B4',
        alignItems: 'center',
        paddingLeft:205
    },
    galleryFlatList:{
        height: 500
    },
    wrapperOne:{
        flex:2, 
        padding: 10,
        flexDirection: 'row', 
        justifyContent:'flex-end', 
        paddingTop: 10
    },
    subHeadText: {
        fontSize: 14,
        paddingBottom: 35,
        textAlign: 'center',
        color: '#3C53B4',
        marginBottom: 5,
    },
    textUnderline: {
        textDecorationLine: 'underline'
    },
    successText: {
        flex: 1,
        color: 'green',
        textAlign: 'right',
    },
    iconLoginInfo:{
        fontSize: 24,
        color: '#3C53B4'
    },
    profileHeaderView:{
        alignItems: 'center', 
        backgroundColor: 'lightskyblue', 
        height: 80,
    },
    profileHeaderText:{
        fontSize:20, 
        fontWeight: 'bold', 
        top: 50
    },
    profileHeaderIconView:{
        left: 20, 
        top: -30
    },
    profileHeaderIconStyle:{
        width: 60, 
        height: 60
    },
    toastBackgroundColor:{
        backgroundColor:'#3C53B4'
    },
    toastFontStyle:{
        color:'white', 
        fontWeight: 'bold', 
        fontSize: 16,
    },
})

export default Styles