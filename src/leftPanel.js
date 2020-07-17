import * as React from 'react';
import {Image, StyleSheet, Text, View, VrButton, NativeModules} from 'react-360';
import { About, Resume, Passion } from './helper'
// const {SurfaceModule} = NativeModules;

export default class leftPanel extends React.Component {
  state = {
    hover0: false,
    hover1: false,
    hover2: false,
    hover3: false,
    openList: [
      {name: 'about',open: false},
      {name: 'resume', open: false},
      {name: 'passion', open: false},
    ]

  };

  onClickAbout = e => {
    let tempArray = this.state.openList;
    tempArray.forEach(item => {
      if (item.name === 'about' ) item.open = !item.open;
      else item.open = false;
    })
    this.setState({openList: tempArray})
  }

  onClickResume = e => {
    let tempArray = this.state.openList;
    tempArray.forEach(item => {
      if (item.name === 'resume' ) item.open = !item.open;
      else item.open = false;
    })
    this.setState({openList: tempArray})
  }

  onClickPassion = e => {
      let tempArray = this.state.openList;
      tempArray.forEach(item => {
        if (item.name === 'passion' ) item.open = !item.open;
        else item.open = false;
      })
      this.setState({openList: tempArray})
  }

  onClickProjects = e => {
    const url = 'https://github.com/fabian339';
    NativeModules.LinkingManager.openURL(url);
  }

  render() {
    const { hover0, hover1, hover2, hover3, 
    openList } = this.state;
    // console.log(openAbout);
    return (
      <View style={{width: 900, height:900}}>
        <View style={styles.menuWrapper}>
          <VrButton style={hover0 ? styles.textBoxHover : styles.textBox}
            onEnter={() => this.setState({hover0: true})}
            onExit={() => this.setState({hover0: false})}
            onClick={this.onClickAbout}> 
            <Text style={styles.postButtonName}>About Me</Text>
          </VrButton>
          <VrButton style={hover2 ? styles.textBoxHover : styles.textBox}
            onEnter={() => this.setState({hover2: true})}
            onExit={() => this.setState({hover2: false})}
            onClick={this.onClickResume}>  
            <Text style={styles.postButtonName}>My Resume</Text>
          </VrButton>
          <VrButton style={hover3 ? styles.textBoxHover : styles.textBox}
            onEnter={() => this.setState({hover3: true})}
            onExit={() => this.setState({hover3: false})}
            onClick={this.onClickPassion}>  
            <Text style={styles.postButtonName}>Passion</Text>
          </VrButton>
          <VrButton style={hover1 ? styles.textBoxHover : styles.textBox}
            onEnter={() => this.setState({hover1: true})}
            onExit={() => this.setState({hover1: false})}
            onClick={this.onClickProjects}> 
            <Text style={styles.postButtonName}>My Projects</Text>
          </VrButton>
        </View>
        {openList[0].open && (
          <View style={styles.about}>
            <About />
          </View>
        )}

        {openList[1].open && (
          <View style={styles.resume}>
            <Resume />
          </View>
        )}

        {openList[2].open && (
          <View style={styles.passion}>
            <Passion />
          </View>
        )} 
        
      </View>
    );
  }
}


const styles = StyleSheet.create({
  passion: {
    width: 500,
    height: 550,
    backgroundColor: '#F0FFF0',
    borderColor: '#808080',
    borderRadius: 10,
    borderWidth: 5,
    transform: [
      {translateX: 100},
      {translateY: 450},
   ]
  },
  resume: {
    width: 600,
    height: 800,
    backgroundColor: '#F0FFF0',
    borderColor: '#808080',
    borderRadius: 10,
    borderWidth: 5,
    transform: [
      {translateX: 30},
      {translateY: 600},
   ]
  },
  about: {
    width: 500,
    height: 550,
    backgroundColor: '#F0FFF0',
    borderColor: '#808080',
    borderRadius: 10,
    borderWidth: 5,
    transform: [
      {translateX: 100},
      {translateY: 450},
   ]
  },
  menuWrapper: {
    width: 400,
    height: 600,
    // backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    transform: [
      {translateX: 550},
      {translateY: -150},
   ]
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

