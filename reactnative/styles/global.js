import { StyleSheet } from "react-native";

//Funciona como una plantilla de estilos
export const globalStyles =  StyleSheet.create({
    container: {
        flex: 1,
        padding: 3,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    containerIn: {
        flex: 1,
        padding: 3,
        justifyContent: 'center',
    },
    containercard: {
        width: '85%',
        borderColor: '#eee',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 5,
        padding: 1,
        marginBottom: 50, 
    },
    icon_imput: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    icon_text: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
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
        marginBottom: 15,
    },
    subtitleText: {
        fontFamily: 'PS-SemiBold',
        fontSize: 20,
        color: '#fff',
    },
    miniTitle: {
        fontFamily: 'PS-Bold',
        fontSize: 25,
        color: '#333',
        marginBottom: 10,
    },
    paragraph: {
        fontFamily: 'PS-Regular',
        marginVertical: 5,
        lineHeight: 20,
        fontSize: 20,
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
    InputData: {
        height: 40,
        width: '85%',
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 10,
        padding: 8,
        marginBottom: 10, 
    },
    InputData2: {
        height: 40,
        width: '75%',
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 10,
        padding: 8,
    },



    //Specifics
    Ingresar: {
        backgroundColor: '#009CDE',
        padding: 15,
        width: '90%',
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 35,
    },
    Registrar: {
        backgroundColor: '#FFA400',
        padding: 15,
        width: '80%',
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    Registrar2: {
        marginTop: 45,
        backgroundColor: '#00C65E',
        padding: 15,
        width: '50%',
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    Registrar3: {
        marginTop: 20,
        backgroundColor: '#009CDE',
        padding: 15,
        width: '80%',
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    Editar: {
        padding: 1,
        width: 40,
        borderRadius: 5,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    LogOut: {
        backgroundColor: '#fe1604',
        padding: 15,
        width: '50%',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width:200,
        height:200,
    }
});