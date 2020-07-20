import * as React from 'react';
import {Image, Text, NativeModules, StyleSheet, VrButton, View, asset} from 'react-360';
import { SiteIntructions } from './helper';
import BackToFrontButtonSurface from './Buttons/backToFrontButtonSurface'

export default class instructionsSurface extends React.Component {
    state = {
        loading: true
    }
    onClickBtn = e => {
        // console.log("calling");
        NativeModules.CustomLinkingModule.goToSiteInstructions();
    }

    render () {
        return (
            <View style={styles.surfaceContainer}>
                <View style={styles.siteIntructions}>
                    <SiteIntructions />
                </View>
                <View style={styles.backToFrontBtn}>
                    <BackToFrontButtonSurface />
                </View>
            </View>

        )}
}

const styles = StyleSheet.create({
    surfaceContainer: {
        width: 1000, 
        height: 700, 
        // backgroundColor: 'yellow'
    },
    backToFrontBtn: {
        margin: 10, 
        alignItems: 'center',
        width: 200, 
        height: 200, 
        position: 'absolute',
        // backgroundColor: 'black',
        transform: [
            {translateX: 600},
            {translateY: -250},
         ]
    },
    siteIntructions: {
        width: 600,
        height: 700,
        backgroundColor: '#F0FFF0',
        borderColor: '#808080',
        borderRadius: 10,
        borderWidth: 5,
    }
});