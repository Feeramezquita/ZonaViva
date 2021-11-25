import { StyleSheet } from "react-native";

//Funciona como una plantilla de estilos
export const globalStyles =  StyleSheet.create({
    container: {
        flex: 1,
        padding: 2,
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
    containercard2: {
        width: '90%',
        borderColor: '#eee',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderRadius: 5,
        padding: 1,
        //marginBottom: 50, 
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
    icon_text2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#009CDE',
        width: '50%',
        borderRadius: 10,
        padding: 2,
        paddingLeft: 10,
        paddingRight: 10,
    },
    Image_text: {
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
    titleTextHeader: {
        fontFamily: 'PS-Bold',
        fontSize: 30,
        color: '#333',
        marginTop: '4%',
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
    microTitle: {
        fontFamily: 'PS-Bold',
        fontSize: 20,
        color: '#333',
        marginBottom: 15,
    },
    microTitle2: {
        fontFamily: 'PS-Bold',
        fontSize: 20,
        color: '#333',
        //marginBottom: 5,
    },
    paragraph: {
        fontFamily: 'PS-Regular',
        marginVertical: 5,
        lineHeight: 20,
        fontSize: 20,
    },
    smallParagraph: {
        fontFamily: 'PS-Regular',
        marginVertical: 5,
        lineHeight: 20,
        fontSize: 15,
    },
    normalText: {
        fontFamily: 'PS-Regular',
        fontSize: 15,
         color: '#000',
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
    scroll:{
        marginTop: '6%',
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
    Add: {
        padding: 1,
        width: 40,
        borderRadius: 5,
        //justifyContent: 'space-between',
        alignItems: 'center',
        //marginBottom: 10,
    },
    Trash: {
        padding: 1,
        width: 40,
        borderRadius: 5,
        //justifyContent: 'space-between',
        alignItems: 'center',
        //marginBottom: 10,
    },
    LogOut: {
        backgroundColor: '#fe1604',
        padding: 15,
        width: '50%',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    Pago: {
        backgroundColor: '#00C65E',
        padding: 10,
        width: '35%',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    ConfirmarPago: {
        backgroundColor: '#FFA400',
        padding: 10,
        width: '35%',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    Regresar: {
        backgroundColor: '#00C65E',
        padding: 10,
        width: '35%',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width:200,
        height:200,
    },
    Payment: {
        width:75,
        height:75,
    }, 
    imagenesHome1:{
        width:"100%",
        height:400,
        flex: 1,
        justifyContent: "center"  
    },
    
    imagenesHome2:{
        width:"100%",
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
    imagenesHome3:{
        width:"100%",
        height:400,
        flex: 9,
        justifyContent: "center"  
    },
    cuadroTexto:{
        backgroundColor:"#228B22",
    },
    titulosHome:{
        color:"#ffffff",
        textAlign:"center",
        fontFamily: 'PS-Bold',
        fontSize: 30,
        marginBottom: "5%",
    },
    parrafosHome:{
        color:"#ffffff",
        textAlign:"justify",
        padding:10,
        marginHorizontal:"3%",
        fontSize: 20,
    },
    integrantes:{
        backgroundColor:"#228B22",
    },
    productos:{
        backgroundColor:"#ffffff",
        borderRadius: 20,
        marginHorizontal:"10%",
        padding:10,
        marginBottom:10
    },
    imagenproducto:{
        width:200,
        height:200,
        marginBottom:10,
        marginHorizontal:"15%"
    },
    detalles:{
        backgroundColor: '#6B8E23',
        width: '50%',
        borderRadius: 10,
        justifyContent: 'space-between',
        marginBottom: 10,
        marginHorizontal:"25%",
        textAlign:"center"
    },
    parrafosbutum:{
        color:"#000000",
        textAlign:"center",
        padding:5,
        marginHorizontal:"3%",
        fontSize: 20,
    },
    titlecatalogo:{
        color:"#000000",
        textAlign:"center",
        fontFamily: 'PS-Bold',
        fontSize: 30,
        marginTop:"5%",
        marginBottom: "3%",  
        backgroundColor:"#ffffff",
        padding:5,
    }, 
    containergreen:{
        backgroundColor:"#228B22"
    },
    containerdetalles:{
        flex: 1,
        padding: 2,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#228B22',
    }
    
});