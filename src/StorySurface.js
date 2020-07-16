import * as React from 'react';
import {Image, StyleSheet, Text, View, asset} from 'react-360';

export default class storySurface extends React.Component {

    render () {
        console.log(this.props.title);
        const {title} = this.props;
        return (
        <View style={{backgroundColor: 'black', width: 400, height: 400}}>
            {title === 'about' ? (
                <Text style={{color: 'red', backgroundColor: 'black'}}>about</Text>
            ) : (
                <Text style={{color: 'red', backgroundColor: 'black'}}>Joder</Text>
            )}
        </View>
        );
    }
        
}