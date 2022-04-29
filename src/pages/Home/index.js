import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';
import { produtos } from '../../utils/constants/produtos';

export default function Home(){

    const [ lista, setLista ] = useState([])

    const navigation = useNavigation()

useEffect(()=>{
    setLista(produtos)
}, [])
    return (
        <SafeAreaView style={styles.container} >
            <ScrollView>
                {lista &&
                    lista.map((produto, index)=> (
                    <View style={styles.card} key={index} >
                        <View>
                            <Text style={styles.nomeProduto} >{ produto.nome }</Text>
                            <Text style={styles.precoProduto} > R$: { produto.preco }</Text>
                            <Text style={styles.descricaoProduto} >{ produto.descricao }</Text>
                        </View>
                        <Image source={{ uri: produto.foto }} style={{width: 50, height:50}} />
                        <TouchableOpacity style={styles.btnDetalhes} onPress={()=> navigation.navigate('Produto', { id:produto.id })} >
                            <Text style={styles.btnDetalhesText} >Detalhes</Text>
                        </TouchableOpacity>
                    </View>
                    ))

                }
            </ScrollView>
        </SafeAreaView>
    );
}