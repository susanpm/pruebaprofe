import React from 'react'
import { StyleSheet, Text, View, Button, Image } from 'react-native'
//import {Header} from 'react-native-elements';
import { Header } from '@rneui/themed';

const HomeScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Header
                backgroundColor='chocolate'
                leftComponent={{ icon: 'menu', color: '#fff', onPress:()=>navigation.openDrawer() }}
                centerComponent={{ text: 'MACTOPÍA', style: { color: '#fff' }}}
                
            />

             <Image source={require('../assets/logocom.png')} />

            <View style={styles.container2}>
                <Button 
                    title="Registro de Cliente" 
                    color="black"
                    onPress={()=>navigation.navigate('Formulario')}
                />
            </View>

            <View style={styles.container3}>
                    <Button
                    
                        title="Clientes Registrados"
                        color="black"
                        onPress={() => navigation.navigate('Listado')}
                    />
            </View>    
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'flex-start',
      
     
    },
    container2: {
        height: 50,
        width: 180,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        backgroundColor: 'pink',
        marginTop: 20,
        
      
      },
      container3: {
        height: 50,
        width: 180,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        backgroundColor: 'coral',
        marginTop: 20,
      },
});