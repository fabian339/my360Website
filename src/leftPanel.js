import * as React from 'react';
import {Image, StyleSheet, Text, View, VrButton, NativeModules, asset} from 'react-360';
import { About, Resume, Passion } from './helper';
import ContactIcons from './ContactIcons';

export default class leftPanel extends React.Component {
  state = {
    hover0: false,
    hover1: false,
    hover2: false,
    hover3: false,
    hover4: false,

    openList: [
      {name: 'about',open: false},
      {name: 'resume', open: false},
      {name: 'passion', open: false},
      {name: 'contact', open: false},
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
    NativeModules.CustomLinkingModule.open(url);
  }

  onClickContact = e => {
    let tempArray = this.state.openList;
    tempArray.forEach(item => {
      if (item.name === 'contact' ) item.open = !item.open;
      else item.open = false;
    })
    this.setState({openList: tempArray})
}


  render() {
    const { hover0, hover1, hover2, hover3, hover4, 
    openList } = this.state;
    // console.log(openAbout);
    return (
      <View style={{width: 900, height:900}}>
        <View>
          <Text style={styles.menuTitle}>Click to view: </Text>
        </View>
        <View style={styles.menuWrapper}>
          <VrButton style={hover0 ? styles.textBoxHover : styles.textBox}
            onEnter={() => this.setState({hover0: true})}
            onExit={() => this.setState({hover0: false})}
            onClick={this.onClickAbout}> 
            <Text style={styles.postButtonName}>About Me</Text>
          </VrButton>
          <VrButton style={hover1 ? styles.textBoxHover : styles.textBox}
            onEnter={() => this.setState({hover1: true})}
            onExit={() => this.setState({hover1: false})}
            onClick={this.onClickResume}>  
            <Text style={styles.postButtonName}>Experience</Text>
          </VrButton>
          <VrButton style={hover2 ? styles.textBoxHover : styles.textBox}
            onEnter={() => this.setState({hover2: true})}
            onExit={() => this.setState({hover2: false})}
            onClick={this.onClickPassion}>  
            <Text style={styles.postButtonName}>Passion & Interest</Text>
          </VrButton>
          <VrButton style={hover3 ? styles.textBoxHover : styles.textBox}
            onEnter={() => this.setState({hover3: true})}
            onExit={() => this.setState({hover3: false})}
            onClick={this.onClickProjects}> 
            <Text style={styles.postButtonName}>My Projects</Text>
          </VrButton>
          <VrButton style={hover4 ? styles.textBoxHover : styles.textBox}
            onEnter={() => this.setState({hover4: true})}
            onExit={() => this.setState({hover4: false})}
            onClick={this.onClickContact}> 
            <Text style={styles.postButtonName}>Contact Me</Text>
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
        {openList[3].open && (
          <View style={styles.contactWrapper}>
            <ContactIcons />
          </View>
        )} 
        
      </View>
    );
  }
}


const styles = StyleSheet.create({
menuTitle:{
    textAlign: 'center',
    fontSize: 60,
    fontWeight: 'bold',
    color: '#00CED1',
    transform: [
      {translateX: 300},
      {translateY: -150},
   ]
    // margin:20
},
contactWrapper: {
  width: 500,
  height: 300,
  backgroundColor: '#F0FFF0',
  borderColor: '#808080',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 10,
  borderWidth: 5,
  transform: [
    {translateX: 50},
    {translateY: 450},
 ]
},
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
      {translateX: 20},
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
      {translateY: -120},
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

