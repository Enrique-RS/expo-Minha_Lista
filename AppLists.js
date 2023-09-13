import { ScrollView, StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import AppItem from "./AppItem";

export default function AppList(){
    return (
        <View style={styles.container}>
            <Text>List!</Text>
            <StatusBar style="light"/>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#D93600',
        alignItems: 'center',
        justifyContent: 'center',
    },
});