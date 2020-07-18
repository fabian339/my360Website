import * as React from 'react';
import {Image, Text, View, StyleSheet, VrButton, NativeModules, asset} from 'react-360';

export default class ContactIcons extends React.Component {
      state = {
        loadingIcon1: true,
        loadingIcon2: true,
    }
    onClickEmail = e => {
      const url = 'mailto:mrfabian.cs@gmail.com';
      NativeModules.LinkingManager.openURL(url);
    }
    
    onClickLinkedIn = e => {
      const url = 'https://www.linkedin.com/in/marcos-fabian-4698521a3/';
      NativeModules.CustomLinkingModule.open(url);
    }

    render () {
      const { loadingIcon1, loadingIcon2 } = this.state;
        return (
            <View>
                <View>
                  {(loadingIcon1 || loadingIcon2) ? (
                      <Text style={styles.contactTitle}>Loading icons... </Text> 
                  ) : (
                    <Text style={styles.contactTitle}>Contact Me:</Text>
                  )}
                </View>
                <View style={styles.contactIconContainer}>
                    <VrButton style={styles.contactIconBtn}
                    onClick={this.onClickEmail}>
                        <Image style={styles.image} onLoadEnd={() => this.setState({loadingIcon1: false})} source={asset('emailIcon.png')} />
                    </VrButton>
                    <VrButton style={styles.contactIconBtn}
                    onClick={this.onClickLinkedIn}>
                        <Image style={styles.image} onLoadEnd={() => this.setState({loadingIcon2: false})} source={asset('linkedin.png')} />
                    </VrButton>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    image: {
      width: 150,
      height: 150,
      borderRadius: 300,
      // margin: 10
    },
    contactIconBtn: {
      width: 150,
      height: 150,
      borderRadius: 300,
      margin: 10
  },
    contactIconContainer: {
      height: 400,
      flexDirection: 'row',
      flex: 2,
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'center'
    },
    contactTitle:{
      textAlign: 'center',
      fontSize: 60,
      fontWeight: 'bold',
      color: '#00008B',
      margin:10
  }
});