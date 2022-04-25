import React from 'react'
import {Text, View, Image, TextInput, TouchableOpacity, StyleSheet} 
from 'react-native'
import  { useNavigation } from '@react-navigation/native';


const TelaInicial = ()=>{
    const navigation = useNavigation();
    return(
    <View style={style.backgroud
       
    }>        
    <Image
        source={require('./src/img/logo.png')}
        style={{width: '80%'}}
        resizeMode='center'
    />
    <TextInput
        style={style.input}
        placeholder='Usuario'
        autoCorrect={false}
        onChangeText={()=>{}}>
    </TextInput>

    <TextInput
        style={style.input}
        placeholder='Senha'
        autoCorrect={false}
        onChangeText={()=>{}}>
    </TextInput>

    <TouchableOpacity onPress={()=> navigation.navigate("Home")}>
        <Text>Logar</Text>
    </TouchableOpacity>
        
    </View>
    
    ) 
};

const style = StyleSheet.create({
    backgroud:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#19cc'
    },
    input:{
        
        width: 300,
        margin: 5,
        backgroundColor: '#fff',
        justifyContent: 'center'
    },

    container :{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        paddingBottom: 20

    }
});
export default TelaInicial;