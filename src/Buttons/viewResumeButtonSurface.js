import * as React from 'react';
import {Image, Text, NativeModules, StyleSheet, VrButton, View, asset} from 'react-360';
import {styles} from './styles'

export default class viewResumeButtonSurface extends React.Component {
    state = {
        loading: true
    }

    onClickBtn = e => {
        const url = 'https://drive.google.com/drive/folders/1OqfenKsdUCHWYVxlCY07MjNki-4OWi_C';
        NativeModules.CustomLinkingModule.open(url);
    }

    render () {
        return (
            <VrButton style={this.state.hover ? styles.btnHover : styles.btn}
            onEnter={() => this.setState({hover: true})}
            onExit={() => this.setState({hover: false})}
            onClick={this.onClickBtn}>
                <Text style={styles.Text}>View My Resume</Text> 
            </VrButton>
        )}
}
