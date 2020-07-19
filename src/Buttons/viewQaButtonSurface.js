
import * as React from 'react';
import {Image, Text, NativeModules, StyleSheet, VrButton, View, asset} from 'react-360';
import {styles} from './styles'
// import {ReactInstance, Surface, Module} from 'react-360-web';
export default class viewQaButtonSurface extends React.Component {
    state = {
        hover: false
    }

    onClickBtn = e => {
        const url = 'https://docs.google.com/document/d/1cqGfu-4smE-26QnezV_lkb579kMoDjKnt4-7ThUfY3c/edit?usp=sharing';
        NativeModules.CustomLinkingModule.open(url);
    }

    render () {
        return (
            <VrButton style={this.state.hover ? styles.btnHover : styles.btn}
                onEnter={() => this.setState({hover: true})}
                onExit={() => this.setState({hover: false})}
                onClick={this.onClickBtn}>
                    <Text style={styles.Text}>Q&A</Text> 
            </VrButton>
        )}
}
