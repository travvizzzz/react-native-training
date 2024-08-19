import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';



function HomeScreen(){
    return(
        <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
            <Text style={{color:"red"}}>Home Screen</Text>
        </View>
    )
}


function SettingScreen(){
    return(
        <View style={{flex:1,justifyContent:"center",alignItems:"center",}}>
            <Text style={{color:"gold"}}>Setting Screen</Text>
        </View>
    )
}

const Click=createBottomTabNavigator()

export default function Tab(){
    return(
        <NavigationContainer>
            <Click.Navigator>
                <Click.Screen name="Home" component={HomeScreen}/>
                <Click.Screen name='Setting' component={SettingScreen}/>    
            </Click.Navigator>
        </NavigationContainer>
    )
}