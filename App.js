// import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import AddUserScreen from './screens/AddUserScreen';
import UserScreen from './screens/UserScreen';
import UserDetailScreen from './screens/UserDetailScreen';
import mapScreen from './screens/mapScreen';

//cara kedua

const Tabs = createBottomTabNavigator();
const ListStack = createStackNavigator();
const MapStack = createStackNavigator();
const AddUserStack = createStackNavigator();

const ListStackScreen = () => (
  <ListStack.Navigator>
    <ListStack.Screen name = "UserScreen" component={UserScreen} options={{ title: 'List User' }} />
    <ListStack.Screen name = "UserDetailScreen" component={UserDetailScreen} options={{ title: 'Detail User' }} />
  </ListStack.Navigator>
)

const MapStackScreen = () => (
  <MapStack.Navigator>
    <MapStack.Screen name = "mapScreen" component={mapScreen} options={{ title: 'Maps' }} />
  </MapStack.Navigator>
)

const AddUserStackScreen = () => (
  <AddUserStack.Navigator>
    <AddUserStack.Screen style={{marginBottom:10, paddingBottom: 1}} name = "AddUserScreen" component={AddUserScreen} options={{ title: 'Add User' }} />
  </AddUserStack.Navigator>
)

export default () => (
  <NavigationContainer>
      <Tabs.Navigator
      screenOptions={{
          headerStyle: {
            backgroundColor: '#621FF7',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        <Tabs.Screen name = "Add" component={AddUserStackScreen} options={{ title: 'Add User' }} />
        <Tabs.Screen name = "List" component={ListStackScreen} options={{ title: 'User Lists' }} />
        <Tabs.Screen name = "Map" component={MapStackScreen} options={{ title: 'Maps' }} />
      </Tabs.Navigator>
  </NavigationContainer>
);

// //cara pertama
// const Stack = createStackNavigator();

// function MyStack() {
//   return (
//     <Stack.Navigator
//       screenOptions={{
//           headerStyle: {
//             backgroundColor: '#621FF7',
//           },
//           headerTintColor: '#fff',
//           headerTitleStyle: {
//             fontWeight: 'bold',
//           },
//         }}>
//       <Stack.Screen 
//         name="UserScreen" 
//         component={UserScreen} 
//         options={{ title: 'Users Lists' }}
//       />
//       <Stack.Screen 
//         name="mapScreen" 
//         component={mapScreen} 
//         options={{ title: 'map screen' }}
//       />
//       <Stack.Screen 
//         name="AddUserScreen" 
//         component={AddUserScreen} 
//         options={{ title: 'Add Users' }}
//       />
//       <Stack.Screen 
//         name="UserDetailScreen" 
//         component={UserDetailScreen} 
//         options={{ title: 'User Detail' }}
//       />
//     </Stack.Navigator>
//   );
// }

// export default function App() {
//   return (
//     <NavigationContainer>
//       <MyStack />
//     </NavigationContainer>
//   );
// }