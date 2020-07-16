import * as React from 'react';
import {Image, StyleSheet, Text, View, VrButton, NativeModules} from 'react-360';
// const {SurfaceModule} = NativeModules;

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
    // NativeModules.surfaceModule.resizeSurf(400,400);

    // console.log(NativeModules);
    // NativeModules.surfaceModule.renderSurface('about');
  }
  onClickProjects = e => {
    NativeModules.surfaceModule.hideSurface();
  }

  render() {
    const { hover0, hover1, hover2, hover3, 
    openAbout } = this.state;
    console.log(openAbout);
    return (
      <View style={{width: 900, height:900}}>
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
            onClick={this.onClickProjects}> 
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
          <View style={styles.about}>
          <Text style={{color: 'red'}}>How will the user feel about what I’m building? This something that always goes through my head during my development process. With my experience in Rails, Unity3D, JavaScript, and React, I strive to make the best Apps in the web. I build products with a sense of discovery, a clear message to get across and products that are just overall fun to interact with. My empathy for the user comes from introducing technology to my Amish family as a kid.
            I studied at The State University of New York at Oswego, where I focused on communications and social interaction. I have integrated my coding knowledge with my communications degree to become an innovative developer with a tenacious appetite for learning, who experiments with new technologies, always strives to understand and implement solutions for a variety of problems.</Text>
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
      {translateX: 5},
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

