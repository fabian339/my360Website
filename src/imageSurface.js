import * as React from 'react';
import {Image, Text, View, asset} from 'react-360';

export default class imageSurface extends React.Component {
    state = {
        loading: true
    }
    render () {
        return (
            <View style={{backgroundColor: 'black',width: 1000, height: 550}}>
                {this.state.loading && (
                   <Text> Loading image... </Text> 
                )}
                <Image style={{width:400,height: 400}} onLoadEnd={() => this.setState({loading: false})} source={asset('marcos.jpg')} />
            </View>
        )}
}