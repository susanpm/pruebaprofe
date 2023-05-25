import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'
import SettingsScreen from '../Screens/SettingsScreen';
import AboutScreen from '../Screens/AboutScreen';
import HomeScreen from '../Navigations/StackNavigation1';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator1() {
    return (
        <Tab.Navigator
            initialRouteName="Settings"
            screenOptions={{ //Versiones anteriores tabBarOptions
                tabBarActiveTintColor: '#ff6600',//activeTintColor
                tabBarInactiveTintColor: "#060606",//inactiveTintColor
                tabBarShowLabel: true,//showLabel
                tabBarLabelStyle: { //labelStyle
                    fontSize: 12
                },
                tabBarStyle: {//style
                    paddingBottom: 5,
                    backgroundColor: "#f3f3f1"
                }

            }}
        >

            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarLabel: "Inicio",
                    tabBarIcon: ({ color }) => (
                        <Ionicons name={"ios-home"} size={20} color={color} />
                    )
                }}

            />

            <Tab.Screen
                name="Settings"
                component={SettingsScreen}
                options={{
                    tabBarLabel: "Settings",
                    tabBarIcon: ({ color }) => (
                        <Ionicons name={"ios-settings"} size={20} color={color} />
                    )
                }}

            />
        
        </Tab.Navigator>
    )
}