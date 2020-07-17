import * as React from 'react';
import {Image, Text,NativeModules, StyleSheet, VrButton, View, asset} from 'react-360';
// import {ReactInstance, Surface, Module} from 'react-360-web';

export default class resumeIcon extends React.Component {
    state = {
        loading: true
    }
    onClickResume = e => {
        // console.log(this.props);
        // new ReactInstance().focusSurface('skillSurface');
        const url = 'https://drive.google.com/drive/folders/1OqfenKsdUCHWYVxlCY07MjNki-4OWi_C';
        NativeModules.CustomLinkingModule.openInNewTab(url);
    }

    render () {
        return (
            <View style={styles.iconWrapper}>
                <View>
                    <Text style={styles.title}>View My Resume</Text> 
                </View>
                <VrButton style={styles.resumeBtn}
                onClick={this.onClickResume}>
                    <Image style={styles.image} source={asset('resumeIcon.png')} />
                </VrButton>
            </View>
        )}
}


const styles = StyleSheet.create({
    image: {
        width: 215,
        height: 200,
        borderRadius: 100,
    },
    resumeBtn: {
        width: 215,
        height: 200,
        // backgroundColor: 'red',
        borderColor: '#F0E68C',
        borderRadius: 100,
        borderWidth: 5,
    },
    title:{
        textAlign: 'center',
        fontSize: 45,
        fontWeight: 'bold',
        color: '#F0E68C',
        // margin:20
    },
    iconWrapper: {
        width: 300,
        height: 300,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'black'
    }
});