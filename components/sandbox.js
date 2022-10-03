import React from 'react'
import { Text, StyleSheet, View } from 'react-native';

export default function Sandbox() {
  return (
    <View style={styles.container}>
        <Text style={styles.boxOne}>boxOne</Text>
        <Text style={styles.boxTwo}>boxTwo</Text>
        <Text style={styles.boxThree}>boxThree</Text>
        <Text style={styles.boxFour}>boxFour</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'flex-end',
        paddingTop: 40,
        backgroundColor: '#ddd'    
    },
    boxOne: {
        padding: 10,
        backgroundColor: 'violet',
    },
    boxTwo: {
        padding: 20,
        backgroundColor: 'gold',
    },
    boxThree: {
        padding: 30,
        backgroundColor: 'coral',
    },
    boxFour: {
        padding: 40,
        backgroundColor: 'skyblue',
    },    
});