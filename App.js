import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/pages/Home/Home';
import AddTravel from './src/pages/AddTravel/AddTravel';
import TravelDetails from './src/pages/TravelDetails/TravelDetails';
import CameraPage from './src/pages/Camera/Camera';

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{ title: 'My Travels' }}
                />
                <Stack.Screen name="AddTravel" component={AddTravel} />
                <Stack.Screen name="TravelDetails" component={TravelDetails} />
                <Stack.Screen name="Camera" component={CameraPage} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}