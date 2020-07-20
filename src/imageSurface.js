import * as React from 'react';
import {Image, Text, StyleSheet, View, asset} from 'react-360';

export default class imageSurface extends React.Component {
    state = {
        loading: true
    }
    render () {
        return (
            <View style={{backgroundColor: this.state.loading ? 'black' : 'transparent',width: 400, height: 450}}>
                <View>
                    {this.state.loading && (
                    <Text> Loading image... </Text> 
                    )}
                    <Image style={{width:400,height: 400}} onLoadEnd={() => this.setState({loading: false})} source={asset('marcos.jpg')} />
                </View>
                <View style={styles.copyrightContainer} >
                    <Text style={styles.copyrightText} > © Marcos 360 (2019-2020) </Text> 
                </View>
            </View>
        )}
}

const styles = StyleSheet.create({
    copyrightContainer: {
        width: 400, 
        position: 'absolute', 
        transform: [
            {translateX: 0},
            {translateY: -400}],

    },
    copyrightText: {
        textAlign: 'center',
        fontSize: 15, 
        // backgroundColor: 'black', 
        // color: '#A9A9A9'
    }
  });
  