import { StyleSheet } from "react-native";

//Funciona como una plantilla de estilos
export const globalStyles =  StyleSheet.create({
    container: {
        flex: 1,
        padding: 5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    tab: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleText: {
        fontFamily: 'PS-Bold',
        fontSize: 30,
        color: '#333',
    },
    subtitleText: {
        fontFamily: 'PS-SemiBold',
        fontSize: 20,
        color: '#fff',
    },
    paragraph: {
        marginVertical: 8,
        lineHeight: 20,
    },
    inputContainer: {
        borderBottomColor: '#F5FCFF',
        backgroundColor: '#FFFFFF',
        borderRadius:30,
        borderBottomWidth: 1,
        width:250,
        height:45,
        marginBottom:20,
        flexDirection: 'row',
        alignItems:'center'
    },
    inputs:{
        height:45,
        marginLeft:16,
        borderBottomColor: '#FFFFFF',
        flex:1,
    },


    //Specifics
    Ingresar: {
        backgroundColor: '#009CDE',
        padding: 15,
        width: '90%',
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    Registrar: {
        backgroundColor: '#FFA400',
        padding: 15,
        width: '90%',
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    logo: {
        width:200,
        height:200,
    }
});