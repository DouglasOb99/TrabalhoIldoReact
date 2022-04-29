import React, { useState } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, TextInput, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Ionicon from 'react-native-vector-icons/Ionicons'
import { styles } from './styles';


export default function Login(){

    const navigation = useNavigation()
    const [ user, setUser ] = useState('')
    const [ password, setPassword ] = useState('')

    const login = () => {

        if(user === ''){
            Alert.alert('Forneça um usuário válido!')
            return;
        }
        if(password === ''){
            Alert.alert('Forneça uma senha válida!')
            return;
        }
        navigation.navigate('Home')
    }

    return (
        <SafeAreaView style={styles.container} >      
            <Ionicon name='person' size={70} color='#00d' />
            <TextInput style={styles.input} 
                placeholder='usuario'
                value={user}
                onChangeText={setUser}
            />
            <TextInput style={styles.input} 
                placeholder='senha'
                secureTextEntry={true}
                value={password}
                onChangeText={setPassword}
            />
            <TouchableOpacity  
                onPress={login}
                style={styles.button} >
                <Text style={styles.buttonText} >Entrar</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}