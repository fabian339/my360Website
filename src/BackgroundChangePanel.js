import * as React from 'react';

import {NativeModules, VrButton, Text, StyleSheet, View, asset, Environment} from 'react-360';
import VideoModule from 'VideoModule';

const backgrounds = [
    '/backgrounds/lake.jpeg',
    '/backgrounds/city.jpeg',
    '/backgrounds/sky.jpeg',
    '/backgrounds/white.jpeg',
    '/backgrounds/malecon.jpeg',
    '/backgrounds/video.mp4'
];


randomString = () => {
    var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz_-";
    var string_length = 6;
    var randomstring = '';
    for (var i=0; i<string_length; i++) {
      var rnum = Math.floor(Math.random() * chars.length);
      randomstring += chars.substring(rnum,rnum+1);
    }
    return randomstring
  }

export default class changeBackgroundimageSurface extends React.Component {

   state = {
       hoverLeft: false,
       hoverRight: false,
       index: 0
   }

//    componentDidMount = () => {

//    }

   onClickBtn = (type) => {
       const {index} = this.state; 
       let isVideo = (index + 1 === backgrounds.length - 1 && type === "next") || (index === 0 && type === "preview");
       if(type === "next"){
            let i = index + 1;
            if(i === backgrounds.length) i = 0;
            let source = asset(backgrounds[i]).uri;
            if(isVideo) this.setVideoBackground(source);
            else {
                Environment.setBackgroundImage(source, {
                    transition: 500,
                })
            }
            this.setState({index: i})
        }else {
            let i = index - 1;
            if(i < 0) i = backgrounds.length - 1;
            let source =  asset(backgrounds[i]).uri;
            if(isVideo) this.setVideoBackground(source);
            else {
                Environment.setBackgroundImage(source, {
                    transition: 500,
                })
            }
            this.setState({index: i})
        }  
              
    }

    setVideoBackground = (source) => {
        let videoName = `video-${randomString()}`
        videoBackground = VideoModule.createPlayer(videoName); // Bike.mp4

        videoBackground.play({
            source: { url: source},
            muted: true
        });
    
        // set loop to true to allow video;
        videoBackground.addListener('onVideoStatusChanged', (e) => {
            if (e.status === 'finished') {
                // console.log('Event', e);
                videoBackground.resume()
            }
        });

        Environment.setBackgroundVideo(videoName, { rotateTransform: [{rotateY: '180deg'}], transition: 500 });

    }

   render(){
        return (
            <View style={styles.buttonsWrapper}>
                <View style={styles.buttonsContainer}>
                    <VrButton
                        onEnter={() => this.setState({hoverLeft: true})}
                        onExit={() => this.setState({hoverLeft: false})}
                        style={this.state.hoverLeft ? styles.btnHover : styles.btn}
                        onClick={() => this.onClickBtn('preview')}
                    >
                        <Text style={styles.Text}>{"<"}</Text> 
                    </VrButton>
                    <VrButton
                        onEnter={() => this.setState({hoverRight: true})}
                        onExit={() => this.setState({hoverRight: false})}
                        style={this.state.hoverRight ? styles.btnHover : styles.btn}
                        onClick={() => this.onClickBtn('next')}
                    >
                        <Text style={styles.Text}>{">"}</Text> 
                    </VrButton>
                </View>
            </View>
        )
   }
}

const styles = StyleSheet.create({
    buttonsWrapper: {
        width: 400, 
        height: 100,
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonsContainer: {
        flexDirection: 'row',
        flex: 2,
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
    },
    btn: {
        width: 90,
        height: 90,
        backgroundColor: '#000000',
        borderColor: '#00CED1',
        borderWidth: 5,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
    },
    btnHover: {     
        width: 90,
        height: 90,
        backgroundColor: '#0066ff',
        borderColor: '#00CED1',
        borderWidth: 5,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
    },
    Text:{
        fontSize: 90,
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
  });
  