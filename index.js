import React from 'react';
import PropTypes from 'prop-types';
import leftPanel from './src/leftPanel';
import imageSurface from './src/imageSurface';
import skillSurface from './src/skillSurface';
import viewResumeButtonSurface from './src/Buttons/viewResumeButtonSurface';
import viewSkillButtonSurface from './src/Buttons/viewSkillButtonSurface'
import backToFrontButtonSurface from './src/Buttons/backToFrontButtonSurface'

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-360';

export default class my360App extends React.Component {
  render() {
    return (
      <View>
          <View style={styles.panel}>
            <View style={styles.greetingBox}>
              <Text style={styles.greeting}>
               Welcome to Marcos Fabian 360 Website
              </Text>
            </View>
            <View>
                <Text style={{color: 'black', fontSize: 25}}>
                  Please take a look around
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
    fontWeight: 'bold'
  },
});


AppRegistry.registerComponent('my360App', () => my360App);
AppRegistry.registerComponent('leftPanel', () => leftPanel);
AppRegistry.registerComponent('imageSurface', () => imageSurface);
AppRegistry.registerComponent('skillSurface', () => skillSurface);
AppRegistry.registerComponent('viewResumeButtonSurface', () => viewResumeButtonSurface);
AppRegistry.registerComponent('viewSkillButtonSurface', () => viewSkillButtonSurface);
AppRegistry.registerComponent('backToFrontButtonSurface', () => backToFrontButtonSurface);
