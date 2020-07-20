import * as React from 'react';
import {Image, Text, NativeModules, StyleSheet, VrButton, View, asset} from 'react-360';
import {styles} from './styles'
// import {ReactInstance, Surface, Module} from 'react-360-web';
export default class backToFrontButtonSurface extends React.Component {
    state = {
        hover: false
    }

    onClickBtn = e => {
        NativeModules.CustomLinkingModule.backToFronr();
    }

    render () {
        // console.log(this.props)
        return (
            <VrButton style={this.state.hover ? styles.btnHover : styles.btn}
                onEnter={() => this.setState({hover: true})}
                onExit={() => this.setState({hover: false})}
                onClick={this.onClickBtn}>
                    <Text style={styles.Text}>Back to Front</Text> 
            </VrButton>
        )}
}
