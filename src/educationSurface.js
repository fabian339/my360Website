import * as React from 'react';
import {Image, Text, NativeModules, StyleSheet, VrButton, View, asset} from 'react-360';
import { SiteIntructions } from './helper';

export default class educationSurface
extends React.Component {
    state = {
        loading: true
    }

    render () {
        return (
            <View style={{width: 350, height: 200} }>
                <View style={styles.educationContainer}>
                    <Text style={styles.title}>Education: </Text>
                    <Text style={styles.detail}>B.A in Computer Science</Text>
                </View>
            </View>
        )}
}

const styles = StyleSheet.create({

    educationContainer: {
        width: 300,
        height: 150,
        backgroundColor: '#F0FFF0',
        borderColor: '#808080',
        borderRadius: 10,
        borderWidth: 5,
        transform: [
            {rotate: -10},
            {translateX: 30},
            {translateY: -20}
         ]
    },
    title: {
        fontSize: 40,
        color: '#00008B',
        textAlign: 'center',
        fontWeight: 'bold',
        margin: 10
        },
    detail: {
        textAlign: 'center',
        fontSize: 20,
        color: 'black',
        marginLeft: 5,
        marginRight: 5
    },
});