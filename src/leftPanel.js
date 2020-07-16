import * as React from 'react';
import {Image, StyleSheet, Text, View, VrButton} from 'react-360';
import StorySurface from './StorySurface';

export default class leftPanel extends React.Component {
  state = {
    hover0: false,
    hover1: false,
    hover2: false,
    hover3: false,
    openAbout: false
  };

  onClickAbout = e => {
    this.setState({openAbout: !this.state.openAbout})
  }

  render() {
    const { hover0, hover1, hover2, hover3, 
    openAbout } = this.state;
    console.log(openAbout);
    return (
      <View>
        <View style={styles.menuWrapper}>
          <VrButton style={hover0 ? styles.textBoxHover : styles.textBox}
            onEnter={() => this.setState({hover0: true})}
            onExit={() => this.setState({hover0: false})}
            onClick={this.onClickAbout}> 
            <Text style={styles.postButtonName}>About Me</Text>
          </VrButton>
          <VrButton style={hover1 ? styles.textBoxHover : styles.textBox}
            onEnter={() => this.setState({hover1: true})}
            onExit={() => this.setState({hover1: false})}> 
            <Text style={styles.postButtonName}>My Projects</Text>
          </VrButton>
          <VrButton style={hover2 ? styles.textBoxHover : styles.textBox}
            onEnter={() => this.setState({hover2: true})}
            onExit={() => this.setState({hover2: false})}> 
            <Text style={styles.postButtonName}>My Resume</Text>
          </VrButton>
          <VrButton style={hover3 ? styles.textBoxHover : styles.textBox}
            onEnter={() => this.setState({hover3: true})}
            onExit={() => this.setState({hover3: false})}> 
            <Text style={styles.postButtonName}>My Tech-Timeline</Text>
          </VrButton>
        </View>
        {openAbout && (
            <StorySurface title='about' />
        )}
      </View>
    );
  }
}



const styles = StyleSheet.create({
  menuWrapper: {
    width: 400,
    height: 600,
    // backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  postButtonInfoHover: {
    backgroundColor: 'rgba(0, 0, 0, 0)',
  },
  textBox: {
    padding: 10,
    margin: 10,
    height: 80,
    backgroundColor: '#696969',
    borderRadius: 20,
    borderColor: '#00CED1',
    borderWidth: 5,
  },
  textBoxHover: {
    padding: 10,
    margin: 10,
    height: 80,
    backgroundColor: '#00FF7F',
    borderRadius: 20,
    borderColor: '#00CED1',
    borderWidth: 5,
  },
  postButtonName: {
    fontSize: 40,
  },
});

