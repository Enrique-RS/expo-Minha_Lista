import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import AppForms from "./AppForms";
import AppList from "./AppList";

const { Navigator, Screen } = createBottomTabNavigator();

function AppTab() {
    return (
        <NavigationContainer>
            <Navigator screenOptions={{
                tabBarActiveTintColor: "#32264d",
                tabBarInactiveTintColor: "#c1bccc",
                tabBarActiveBackgroundColor: "#ebebf5",
                tabBarInactiveBackgroundColor: "#fafafc",
                tabBarLabelStyle: {
                    fontSize: 13, position: 'absolute',
                    top: 15, bottom: 0, left: 0, right: 0
                },
                tabBarIconStyle: { display: "none" }
            }}>
                <Screen name="AppList" component={AppList} 
                    options={{
                        tabBarLabel: "Compras"
                    }}
                />
                <Screen name="AppForms" component={AppForms} 
                    options={{
                        tabBarLabel: "Adicionar"
                    }}
                />
            </Navigator>
        </NavigationContainer>
    );
}
export default AppTab;