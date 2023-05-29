import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import {
    View, Text, Dimensions
} from 'react-native';
import Dashboard from "../screens/dashboard";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();

function MyHeaderNavigator() {
    return (
        <Drawer.Navigator
            // drawerContent={props => <CustomSideMenu {...props} />}
            screenOptions={{
                drawerLockMode: 'locked-closed',
                drawerWidth: Dimensions.get('window').width - 60,
            }}
            initialRouteName="MainStack">
            <Drawer.Screen
                options={{ headerShown: false }}
                name="Dashboard"
                component={Dashboard}
            />
        </Drawer.Navigator>
    );
}



const Stack = createNativeStackNavigator();

const MainNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Dashboard" screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Drawer" component={MyHeaderNavigator} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default MainNavigator;