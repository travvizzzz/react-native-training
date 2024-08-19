// import * as React from 'react';
// import { Button, View } from 'react-native';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { NavigationContainer } from '@react-navigation/native'


// function HomeScreen({ navigation }) {
//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Button
//           onPress={() => navigation.navigate('Notifications')}
//           title="Go to notifications"
//         />
//       </View>
//     );
//   }


//   function NotificationsScreen({ navigation }) {
//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Button onPress={() => navigation.goBack()} title="Go back home" />
//       </View>
//     );
//   }


// const Bar=createDrawerNavigator()

// export default function Drawer(){
//     <NavigationContainer>
//         <Bar.Navigator initialRouteName='Home'>
//             <Bar.Screen name="Home" component={HomeScreen}/> 
//             <Bar.Screen name="Nottications" component={NotificationsScreen}/>
//         </Bar.Navigator>
//     </NavigationContainer>
// }

import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    </View>
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

const Draw = createDrawerNavigator();

export default function Drawer() {
  return (
    <NavigationContainer>
      <Draw.Navigator initialRouteName="Home">
        <Draw.Screen name="Home" component={HomeScreen} />
        <Draw.Screen name="Notifications" component={NotificationsScreen} />
      </Draw.Navigator>
    </NavigationContainer>
  );
}