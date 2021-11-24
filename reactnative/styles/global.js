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
    container2: {
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
    },
    imagenesHome1:{
        width:400,
        height:400,
        flex: 1,
        justifyContent: "center"  
    },
    
    imagenesHome2:{
        width:400,
        height:400,
        flex: 2,
        justifyContent: "center"  
    },
    imagenesequipo1:{
        width:200,
        height:200,
        marginHorizontal:"25%",
    },
    imagenesequipo2:{
        width:200,
        height:200,
        marginHorizontal:"25%",
    },
    imagenesequipo3:{
        width:200,
        height:200,
        marginHorizontal:"25%",
    },
    imagenesequipo4:{
        width:200,
        height:200,
        marginHorizontal:"25%",
    },
    imagenesequipo5:{
        width:200,
        height:200,
        marginHorizontal:"25%",
    },
    imagenesequipo6:{
        width:200,
        height:200,
        marginHorizontal:"25%",
    },
    imagenesHome3:{
        width:400,
        height:400,
        flex: 9,
        justifyContent: "center"  
    },
    cuadroTexto:{
        backgroundColor:"#228B22",
        width:400,
        height:650,
        
    },
    titulosHome:{
        color:"#ffffff",
        textAlign:"center",
        fontFamily: 'PS-Bold',
        fontSize: 30,
        marginBottom: 15,
    },
    parrafosHome:{
        color:"#ffffff",
        textAlign:"justify",
        padding:10,
        marginHorizontal:10,
        fontSize: 20,
    },
    
    integrantes:{
        backgroundColor:"#228B22",
        width:400,
        height:2450,
    },
});