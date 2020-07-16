import React from 'react';
import PropTypes from 'prop-types';
import leftPanel from './src/leftPanel';
import imageSurface from './src/imageSurface';


import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-360';

export default class my360App extends React.Component {
  render() {
    // console.log(this.props.name)
    return (
      <View>
          <View style={styles.panel}>
            <View style={styles.greetingBox}>
              <Text style={styles.greeting}>
                Hey there, Welcome to my 360 office.
              </Text>
            </View>
            <View>
                <Text style={{color: 'black', fontSize: 25}}>
                  Please take a look around.
                </Text>
            </View>
        </View>
      </View>
    );
  }
};



const styles = StyleSheet.create({

  panel: {
    // Fill the entire surface
    width: 1000,
    height: 120,
    // backgroundColor: 'rgba(255, 255, 255, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  greetingBox: {
    padding: 20,
    backgroundColor: '#000000',
    borderRadius: 20,
    borderColor: '#639dda',
    borderWidth: 2,
  },
  greeting: {
    fontSize: 30,
  },
});


AppRegistry.registerComponent('my360App', () => my360App);
AppRegistry.registerComponent('leftPanel', () => leftPanel);
AppRegistry.registerComponent('imageSurface', () => imageSurface);
