import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { View ,Text,Button} from 'react-native'




const  Stack=createNativeStackNavigator()


function MainScreen(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen}/>
                <Stack.Screen name="Detail"component={Detail}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}
const HomeScreen = ({navigation}) => {
  return (
    
    <View style={{flex:1, alignItems:"center", justifyContent:"center"}}>
        <Text>Home</Text>
        <Button title="Go to Detail" onPress={()=>navigation.navigate('Detail')}
        />
    </View>
   
  )
}

const Detail=({navigation})=>{
    return(
        <View style={{flex:1,alignItems:'center',justifyContent:"center"}}>
            <Text>Detail Screen</Text>
            <Button title="Back to Home" onPress={()=>navigation.navigate('Home')}/>
        </View>
    )
}

export default MainScreen
