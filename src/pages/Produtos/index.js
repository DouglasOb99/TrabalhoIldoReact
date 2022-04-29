import React from "react";
import { View, Text, SafeAreaView, Image, TouchableOpacity, Alert } from 'react-native'
import { useRoute } from '@react-navigation/native'
import { produtos } from "../../utils/constants/produtos";
import { styles } from './styles'


export default function DetalhesProduto(){

    const id_produto = useRoute().params.id

    const produto = produtos.filter(p => p.id == id_produto)  

    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.cardProduto} >
                <Image source={{ uri:produto[0].foto }} style={styles.fotoProduto} />
                <Text style={styles.nomeProduto} >{produto[0].nome}</Text>
                <Text style={styles.precoProduto} >R$: {produto[0].preco}</Text>
                <Text style={styles.descricaoProduto} >Descrição: {produto[0].descricao}</Text>
                <TouchableOpacity 
                    style={{ backgroundColor: '#FDA00D',
                                padding:15,
                                borderRadius:5,
                                marginTop: 20 }}
                                onPress={()=> Alert.alert('Saldo insuficiente') } >
                    <Text style={{ color:'#fff' }}>Comprar</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}