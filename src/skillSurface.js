import * as React from 'react';
import {Image,StyleSheet, Text, View, asset} from 'react-360';

export default class skillSurface extends React.Component {


    render () {
        return (
            <View style={styles.Wrapper}>
                <View>
                    <Text style={styles.title}>Technical Skills</Text>
                </View>
                <View style={styles.imageContainer}>
                    {/* front end */}
                    <Image style={styles.logo} source={{uri: '../static_assets/logos/javascript.png'}} />
                    <Image style={{ width:100, height: 70, marginLeft: 20, marginRight: 20, marginTop: 35 }} source={{uri: '../static_assets/logos/react.png'}} />
                    <View style={{ alignItems: 'center'}}>
                        <Image style={styles.logo} source={{uri: '../static_assets/logos/react360.png'}} />
                        <Text style={{marginTop: '-15px', color: '#191970', fontWeight: 'bold'}}>React 360°</Text>
                    </View>
                    <Image style={{ width:110, height: 100, marginLeft: 20, marginRight: 20, marginTop: 25 }} source={{uri: '../static_assets/logos/vuejs.png'}} />
                    <Image style={{ width:100, height: 100, marginLeft: 20, marginRight: 20, marginTop: 25 }} source={{uri: '../static_assets/logos/jquery.png'}} />
                    <Image style={styles.logo} source={{uri: '../static_assets/logos/rails.png'}} />
                    <Image style={styles.logo} source={{uri: '../static_assets/logos/angular.png'}} />
                    <Image style={styles.logo} source={{uri: '../static_assets/logos/html.png'}} />
                    <Image style={styles.logo} source={{uri: '../static_assets/logos/css.png'}} />
                    <Image style={styles.logo} source={{uri: '../static_assets/logos/less.png'}} />
                    <Image style={styles.logo} source={{uri: '../static_assets/logos/bootstrap.png'}} />
                    <Image style={styles.logo} source={{uri: '../static_assets/logos/material.png'}} />

                    {/* back end */}
                    <Image style={styles.logo} source={{uri: '../static_assets/logos/node.png'}} />
                    <Image style={{ width:100, height: 50, marginLeft: 20, marginRight: 20, marginTop: 35 }} source={{uri: '../static_assets/logos/firebase.png'}} />
                    <Image style={{ width:110, height: 50, marginLeft: 20, marginRight: 20, marginTop: 35 }} source={{uri: '../static_assets/logos/mongo.png'}} />
                    <Image style={styles.logo} source={{uri: '../static_assets/logos/cpp.png'}} />
                    <Image style={styles.logo} source={{uri: '../static_assets/logos/java.png'}} />
                    <Image style={styles.logo} source={{uri: '../static_assets/logos/ruby.png'}} />

                    {/* others */}
                    <Image style={{ width:160, height: 70, marginLeft: 10, marginRight: 10, marginTop: 20 }} source={{uri: '../static_assets/logos/vs.png'}} />
                    <Image style={{ width:80, height: 45, marginLeft: 10, marginRight: 10, marginTop: 35 }} source={{uri: '../static_assets/logos/npm.png'}} />
                    <View style={{ alignItems: 'center'}}>
                        <Image style={{ width:80, height: 60, margin: 20 }} source={{uri: '../static_assets/logos/yarn.png'}} />
                        <Text style={{marginTop: '-15px', color: '#191970', fontWeight: 'bold'}}>Yarn</Text>
                    </View>
                </View>
            </View>
        )}
}

const styles = StyleSheet.create({
    logo: {
        width:100,
        height: 80, 
        margin: 20
    },
    imageContainer: {
        height: 400,
        flexDirection: 'row',
        flex: 2,
        flexWrap: 'wrap'
    },
    Wrapper:{
        // backgroundColor: 'black',
        width: 1000, 
        height: 550,
    },
    title:{
        textAlign: 'center',
        fontSize: 50,
        fontWeight: 'bold',
        color: '#FF4500',
        margin:20
    }
  });
  
  