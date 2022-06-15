import * as React from 'react';
import {Image, StyleSheet, Text, View, VrButton, NativeModules, asset} from 'react-360';


export const About = () => {
    return (
    <View>
        <Text style={styles.title}>About</Text>
        <Text style={styles.about}>
            Marcos Fabian is a Software Engineer that loves developing cool applications. 
            He is very passionate about technology and love to keep learning 
            and innovating in the field. He started his career in the 
            engineering field at the age of 16 when he first built a computer 
            from scratch. That was the trigger point that made him pursue a 
            career in computer science. Additionally, he loves challenges. 
            He believes that the best way of learning is by going 
            through situations that will elevate his skill-set.  
        </Text>
    </View>
    )
}
    

export const Resume = () => {
    return (
    <View>
        <View>
            <Text style={styles.organization}>HackerNoon (Remote)</Text>
            <Text style={styles.porsitionTitle}>Senior Full Stack Software Engineer - (04/2021 - present)</Text>
            <Text style={styles.detail}>- Build APIs, develop interactive web applications/components, 
                and handle server maintenance in a collaborative or independent manner
            </Text>
            <Text style={styles.detail}>- Supervise intern, collaborate in hiring processes, and assign 
                direct projects
            </Text>
        </View>
        <View>
            <Text style={styles.organization}>Teleshop (Long Island, NY)</Text>
            <Text style={styles.porsitionTitle}>Web Developer – (01/2021 – 04/2021)</Text>
            <Text style={styles.detail}>- Develop product and custom pages using Shopify,
                WordPress, HTML, JavaScript & CSS
            </Text>
            <Text style={styles.detail}>- Collaborate in developing new platforms, designing
                graphics, and templating custom email campaign
            </Text>
        </View>
        <View>
            <Text style={styles.organization}>MadeInBrooklynGames (Brooklyn, NY)</Text>
            <Text style={styles.porsitionTitle}>React360 Developer – (October 2020 – Present)</Text>
            <Text style={styles.detail}>- Develop interactive React360 applications that ensures</Text>
            <Text style={styles.detail}>- Design framework for easy project modifications</Text>
            <Text style={styles.detail}>- Collaborate directly with supervisor on new
                ideas, implementations
            </Text>
        </View>
        <VrButton
            onClick={ () => {
                NativeModules.CustomLinkingModule.open('https://drive.google.com/drive/folders/1OqfenKsdUCHWYVxlCY07MjNki-4OWi_C');
            }}>
            <Text style={styles.openResume}>Click to View Entire Resume!!</Text>
        </VrButton>
    </View>
    )
}
    // Some other JSX
export const Passion = () => {
    return (
        <View>
            <Text style={styles.title}>Passion & Interest</Text>
            <Text style={styles.category}>Web Development</Text>
            <Text style={styles.category}>Building APIs</Text>
            <Text style={styles.category}>Write readable code</Text>
            <Text style={styles.category}>Support others</Text>
            <Text style={styles.category}>Challenge and proof myself</Text>
            <Text style={styles.category}>Spend time with love ones</Text>
            <Text style={styles.category}>Watch and play Basketball</Text>
        </View>
    )
}

export const SiteIntructions = () => {
    return (
    <View>
        <Text style={styles.title}>About this site</Text>
        <Text style={styles.siteInstructions}>
            Marcos 360 is a Web Application designed with the purpose of being unique and authentic. 
            Most of the time, when we think of personal websites, we are already picturing a regular blog website. 
            For me, I wanted to be different. I wanted to learn something new and enjoyable. 
        </Text>
        <View>
            <Text style={styles.title}>Usage:</Text>
            <Text style={styles.siteInstructions}>
                * Rotate the background either by touching the screen or by long pressing and moving the mouse </Text>
            <Text style={styles.siteInstructions}>* Click on buttons to view content </Text>
        </View>
        <View>
            <Text style={styles.title}>Compatibility:</Text>
            <Text style={styles.siteInstructions}>
                * Works best on Desktop and Laptop devices, experience might differ on iOS & Android </Text>
            <Text style={styles.siteInstructions}>
                * Works best on Google Chrome and Opera Browser, experience might differ on other
                browser such as Safari & Firefox
                </Text>
        </View>
    </View>
    )
}


const styles = StyleSheet.create({
    category:{
        textAlign: 'center',
        fontSize: 25,
        color: 'black',
        width: '60%',
        marginLeft: '20%',
        marginRight: '20%',
        marginTop: 10,
        marginBottom: 10,
        padding: 10,
        height: 50,
        backgroundColor: '#DAA520',
        borderRadius: 20,
        borderColor: '#00CED1',
        borderWidth: 3,
        justifyContent: 'center',
    },
    about: {
        textAlign: 'center',
        fontSize: 25,
        color: '#000000',
        marginLeft: 10,
        marginRight: 10
    },
    title: {
        fontSize: 40,
        color: '#00008B',
        textAlign: 'center',
        fontWeight: 'bold',
        margin: 10
    },
    organization: {
        fontSize: 25,
        color: '#00BFFF',
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 5
    },
    detail: {
        textAlign: 'center',
        fontSize: 20,
        color: 'black',
        marginLeft: 5,
        marginRight: 5
    },
    porsitionTitle: {
        textAlign: 'center',
        fontSize: 20,
        color: '#009900',
        marginLeft: 5,
        marginRight: 5,
        fontStyle: 'italic',
    },
    openResume: {
        textAlign: 'center',
        fontSize: 25,
        color: '#003399',
        margin: 15,
        fontWeight: 'bold',
        textDecorationLine: 'underline'
    },
    siteInstructions: {
        textAlign: 'center',
        fontSize: 25,
        color: '#000000',
        marginLeft: 10,
        marginRight: 10
    },
});