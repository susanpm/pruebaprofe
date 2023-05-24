import React, {useContext} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import { ListItem, Header } from '@rneui/themed';
//import {ListItem, Header} from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {AlumnosContext} from '../Context/AlumnosContext';



const Listado = ({navigation}) => {

    const {lista, setAlumno,eliminar} = useContext(AlumnosContext);

    return (
    
    <View style={styles.container}>
        <Header
            centerComponent={{ text: 'Lista de Clientes', style: { color: '#fff', fontSize:20 } }}
            rightComponent={{ icon: 'person-add', color: '#fff', onPress:()=>{
                 setAlumno({
                     matricula: null,
                     nombre: "",
                     Telefono: "",
                     FechaIn: "",
                     Modelo: "",
                     Num_serie: "",
                     Descripcion: "", 
                   
                 })   

                 navigation.navigate('Formulario',{status:"add"})

            }}}
            containerStyle={{backgroundColor:'gray'}}
        />
        <ScrollView>
        {
            lista.length>0
            ?
            lista.map((a,i)=>(
                <ListItem key={i} bottomDivider>
                    <ListItem.Content>
                        <ListItem.Title>{a.nombre}</ListItem.Title>
                        <ListItem.Subtitle>{a.Modelo}</ListItem.Subtitle>
                    </ListItem.Content>
                    <View style={styles.buttons}>
                        <Ionicons name='ios-trash' size={30} color={'red'} onPress={()=>eliminar(a.matricula)}/>
                        <Ionicons name='md-create' size={30} color={'green'}  onPress={()=>{
                            setAlumno({
                                matricula:a.matricula.toString(),
                                nombre:a.nombre,
                                Telefono:a.Telefono,
                                FechaIn: a.FechaIn,
                                Modelo: a.Modelo,
                                Num_serie: a.Num_serie,
                                Descripción: a.Descripcion
                               
                            })

                            navigation.navigate('Formulario',{status:"edit"})
                        }}/>

                    </View>
                </ListItem>

            ))
            :
            <Text style={{marginTop:50, textAlign:'center', fontSize:20}}>No Clientes Registrados</Text>


        }
        </ScrollView>
    </View>
    );
}
 
export default Listado;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
    },
    buttons:{
        width:'25%', 
        flexDirection:'row', 
        justifyContent:'space-between'
    }
});