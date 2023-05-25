import React, { useContext } from 'react';
import { TextInput, View, StyleSheet, Text } from 'react-native';
import { Button } from '@rneui/themed';
//import {Button} from 'react-native-elements'

import { Formik } from 'formik';
import * as Yup from 'yup';
import { AlumnosContext } from '../Context/AlumnosContext';
import Constants from 'expo-constants';
//import firebase from '../Settings/ConfigFirebase'
import { firebase } from '../Settings/ConfigFirebase';
import { ref, update } from 'firebase/database';

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const validations = Yup.object().shape({
    matricula: Yup.number().typeError('Este campo es numérico').max(99999999, "Número muy grande").required('Obligatorio'),
    nombre: Yup.string().min(2, 'Nombre muy corto').max(50, 'Nombre muy largo').required('Obligatorio'),
    Telefono: Yup.string().matches(phoneRegExp, 'Phone number is not valid'),
    FechaIn: Yup.string().min(2, ' muy corto').max(50, ' muy largo').required('Obligatorio'),
    Modelo: Yup.string().min(2, 'muy corto').max(50, 'muy largo').required('Obligatorio'),
    Num_serie: Yup.string().min(2, 'muy corto').max(50, 'muy largo').required('Obligatorio'),
    Descripcion: Yup.string().required('Obligatorio'),
})


export default function Formulario({ route, /*navigation*/ }) {
    const { status } = route.params;
    const { alumno, lista, setAlumno, setLista } = useContext(AlumnosContext);

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Clientes</Text>

            <Formik
                initialValues={alumno}
                onSubmit={(values, { resetForm }) => {

                    update(ref(firebase, 'Alumnos/' + alumno.matricula), alumno)
                        .then(() => {
                            alert("Enviado")
                        })

                    /* version anterior
                     firebase.database().ref('Alumnos/'+alumno.matricula).update(alumno).then(()=>{
                         alert("Enviado")
                     })
                    */
                    const temporal = lista.filter(al => al.matricula != alumno.matricula);//!==
                    //alert('enviado')
                    setLista([...temporal, alumno]);
                    resetForm({
                        matricula: "",
                        nombre: "",
                        Telefono: "",
                        FechaIn: "",
                        Modelo: "",
                        Num_serie: "",
                        Descripcion: "",

                    })
                    navigation.goBack();

                    //console.log(lista) 
                }}
                validationSchema={validations}
                validate={(values) => {
                    setAlumno(values)
                    //console.log(alumno)
                }}
            >
                {
                    ({ handleChange, handleBlur, handleSubmit, setFieldValue, handleReset, errors, values }) => (
                        <View>
                            <TextInput
                                style={styles.textinput}
                                onChangeText={handleChange('matricula')}
                                onBlur={handleBlur('matricula')}
                                placeholder="Codigo"
                                value={values.matricula}
                                editable={status === "add" ? true : false}
                            />

                            {errors.matricula && <Text style={styles.texterror}>{errors.matricula}</Text>}

                            <TextInput
                                style={styles.textinput}
                                onChangeText={handleChange('nombre')}
                                onBlur={handleBlur('nombre')}
                                placeholder="Nombre"
                                value={values.nombre}

                            />

                            {errors.nombre && <Text style={styles.texterror}>{errors.nombre}</Text>}

                            <TextInput
                                style={styles.textinput}
                                onChangeText={handleChange('Telefono')}
                                onBlur={handleBlur('Telefono')}
                                placeholder="Telefono"
                                value={values.Telefono}

                            />

                            {errors.Telefono && <Text style={styles.texterror}>{errors.Telefono}</Text>}

                            <TextInput
                                style={styles.textinput}
                                onChangeText={handleChange('FechaIn')}
                                onBlur={handleBlur('FechaIn')}
                                placeholder="Fecha Entrada"
                                value={values.FechaIn}

                            />

                            {errors.FechaIn && <Text style={styles.texterror}>{errors.FechaIn}</Text>}

                            <TextInput
                                style={styles.textinput}
                                onChangeText={handleChange('Modelo')}
                                onBlur={handleBlur('Modelo')}
                                placeholder="Modelo"
                                value={values.Modelo}

                            />

                            {errors.Modelo && <Text style={styles.texterror}>{errors.Modelo}</Text>}

                            <TextInput
                                style={styles.textinput}
                                onChangeText={handleChange('Num_serie')}
                                onBlur={handleBlur('Num_serie')}
                                placeholder="Numero de serie"
                                value={values.Num_serie}

                            />

                            {errors.Num_serie && <Text style={styles.texterror}>{errors.Num_serie}</Text>}

                            <TextInput
                                style={styles.textinput}
                                onChangeText={handleChange('Descripcion')}
                                onBlur={handleBlur('Descripcion')}
                                placeholder="Descripcion"
                                value={values.Descripcion}

                            />

                            {errors.Descripcion && <Text style={styles.texterror}>{errors.Descripcion}</Text>}


                            <View style={{ marginTop: 20 }}>
                                <Button
                                    buttonStyle={styles.buttons}
                                    onPress={handleSubmit}
                                    title="Enviar"
                                />

                                {
                                    status === "add"
                                    &&
                                    <Button
                                        buttonStyle={styles.buttons}
                                        onPress={handleReset}
                                        title="Limpiar"
                                    />

                                }



                            </View>

                        </View>
                    )


                }

            </Formik>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        margin: 20,
        marginTop: Constants.statusBarHeight

    },
    texterror: {
        color: 'red'
    },
    textinput: {
        borderRadius: 10,
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        margin: 5,
        paddingLeft: 15,
        backgroundColor: 'white',
        elevation: 5,
    },
    buttons: {
        backgroundColor: 'gray',
        color: 'black',
        marginTop: 10,
        borderRadius: 10
    },
    header: {
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 40
    },
    picker: {
        margin: 5,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'gray',
        overflow: 'hidden',
        elevation: 5,
    }

});
