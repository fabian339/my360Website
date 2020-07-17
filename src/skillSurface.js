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
                    <Image style={styles.logo} source={{uri: '../static_assets/logos/bootstrap.png'}} />
                    <Image style={styles.logo} source={{uri: '../static_assets/logos/cpp.png'}} />
                    <Image style={styles.logo} source={{uri: '../static_assets/logos/css.png'}} />
                    <Image style={styles.logo} source={{uri: '../static_assets/logos/firebase.png'}} />
                    <Image style={styles.logo} source={{uri: '../static_assets/logos/git.png'}} />
                    <Image style={styles.logo} source={{uri: '../static_assets/logos/html.png'}} />
                    <Image style={styles.logo} source={{uri: '../static_assets/logos/java.png'}} />
                    <Image style={styles.logo} source={{uri: '../static_assets/logos/jquery.png'}} />
                    <Image style={styles.logo} source={{uri: '../static_assets/logos/material.png'}} />
                    <Image style={styles.logo} source={{uri: '../static_assets/logos/bitbucket.png'}} />
                    <Image style={styles.logo} source={{uri: '../static_assets/logos/mongo.png'}} />
                    <Image style={styles.logo} source={{uri: '../static_assets/logos/node.png'}} />
                    <Image style={styles.logo} source={{uri: '../static_assets/logos/npm.png'}} />
                    <Image style={styles.logo} source={{uri: '../static_assets/logos/rails.png'}} />
                    <Image style={styles.logo} source={{uri: '../static_assets/logos/react.png'}} />
                    <Image style={styles.logo} source={{uri: '../static_assets/logos/ruby.png'}} />
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
  
  