import * as React from 'react';
import {Image, Text, NativeModules, StyleSheet, VrButton, View, asset} from 'react-360';
import {styles} from './styles'
// import {ReactInstance, Surface, Module} from 'react-360-web';
export default class viewQuickTourButtonSurface extends React.Component {
    state = {
        hover: false,
        showText: false,
    }

    onClickBtn = e => {
      // this.setState({showText: true})
      // if (this.state.seconds > 0) {
      //   console.log('heree');
      //     this.timer = setInterval(this.countDown, 1000);
      //   }
        NativeModules.CustomLinkingModule.virtualTourt();
    }

    render () {
        return (
            <View style={{width: 250, alignItems: 'flex-end', height: 250,}}>
                {/* {(this.state.showText) && ( */}
                {/* <View>
                    <Text style={{fontSize: 30, color: '#00008B', fontWeight: 'bold'}}>Loading tour in {this.state.seconds}...</Text>
                </View> */}
                {/* )} */}

                <VrButton style={this.state.hover ? styles.btnHover : styles.btn}
                    onEnter={() => this.setState({hover: true})}
                    onExit={() => this.setState({hover: false})}
                    onClick={this.onClickBtn}>
                    <Text style={styles.Text}>Quick Tour</Text> 
                </VrButton>

            </View>
        )}
}

