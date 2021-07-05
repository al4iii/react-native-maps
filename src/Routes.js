import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Main from "./container/Main";
import Secondary from "./container/Secondary";

const Stack = createStackNavigator();

const Routes = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Main" component={Main} options={{ headerShown: false }} />
                <Stack.Screen name="Secondary" component={Secondary} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
};

export default Routes;