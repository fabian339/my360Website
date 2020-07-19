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
            <View style={styles.education}>
                <Text style={styles.title}>Education: </Text>
                <Text style={styles.detail}>B.A in Computer Science</Text>
            </View>

        )}
}

const styles = StyleSheet.create({

    education: {
        width: 300,
        height: 150,
        backgroundColor: '#F0FFF0',
        borderColor: '#808080',
        borderRadius: 10,
        borderWidth: 5,
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