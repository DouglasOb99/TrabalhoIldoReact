import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 20
    },
    card:{
        width: '100%',
        height: 100,
        backgroundColor: '#FDA00D',
        padding: 10,
        borderRadius:5,
        flexDirection:'row',
        justifyContent:'space-between',
        overflow: 'hidden',
        marginBottom: 15      
    },
    nomeProduto:{
        fontWeight:'bold',
        color: '#fff',
        fontSize:17
    },
    precoProduto:{
        color: '#fff'
    },
    descricaoProduto:{
        color: '#000',
        fontSize:10
    },
    btnDetalhes:{
        backgroundColor: '#00d',
        padding: 15,
        borderRadius:6,
        maxHeight: 50
    },
    btnDetalhesText:{
        alignItems:'center',
        color: '#fff',
        fontWeight:'bold'
    }

})
