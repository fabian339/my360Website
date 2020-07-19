import * as React from 'react';
import {Image, Text, NativeModules, StyleSheet, VrButton, View, asset} from 'react-360';
import { SiteIntructions } from './helper';
import BackToFrontButtonSurface from './Buttons/backToFrontButtonSurface'

export default class instructionsSurface extends React.Component {
    state = {
        loading: true
    }
    onClickBtn = e => {
        console.log("calling");
        NativeModules.CustomLinkingModule.goToSiteInstructions();
    }

    render () {
        return (
            <View style={{width: 500, height: 600}}>
                <View style={styles.siteIntructions}>
                    <SiteIntructions />
                </View>
                <View style={{ margin: 10, alignItems: 'center',}}>
                    <BackToFrontButtonSurface />
                </View>
            </View>

        )}
}

const styles = StyleSheet.create({

    siteIntructions: {
        width: 500,
        height: 450,
        backgroundColor: '#F0FFF0',
        borderColor: '#808080',
        borderRadius: 10,
        borderWidth: 5,
    }
});