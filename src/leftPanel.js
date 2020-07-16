import * as React from 'react';
import {Image, StyleSheet, Text, View, VrButton, NativeModules} from 'react-360';
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
      {name: 'interest', open: false},
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

  onClickInterests = e => {
      let tempArray = this.state.openList;
      tempArray.forEach(item => {
        if (item.name === 'interest' ) item.open = !item.open;
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
            onClick={this.onClickInterests}>  
            <Text style={styles.postButtonName}>Interests</Text>
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
            <Text style={{color: 'red'}}>How will the user feel about what I’m building? This something that always goes through my head during my development process. With my experience in Rails, Unity3D, JavaScript, and React, I strive to make the best Apps in the web. I build products with a sense of discovery, a clear message to get across and products that are just overall fun to interact with. My empathy for the user comes from introducing technology to my Amish family as a kid.
              I studied at The State University of New York at Oswego, where I focused on communications and social interaction. I have integrated my coding knowledge with my communications degree to become an innovative developer with a tenacious appetite for learning, who experiments with new technologies, always strives to understand and implement solutions for a variety of problems.</Text>
          </View>
        )}

        {openList[1].open && (
          <View style={styles.about}>
            <Text>HELLOOO RESUME</Text>
          </View>
        )}

        {openList[2].open && (
          <View style={styles.about}>
            <Text>HELLOOO Interest</Text>
          </View>
        )} 
        
      </View>
    );
  }
}



const styles = StyleSheet.create({
  about: {
    width: 400,
    height: 600,
    backgroundColor: 'green',
    borderColor: '#00CED1',
    borderRadius: 5,
    transform: [
      {translateX: 130},
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
      {translateX: 450},
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

