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
            <Text style={styles.porsition}>Ask Applications (Yonkers, NY) - Intern</Text>
            <Text style={styles.detail}>Develop and maintain web products in a timely
                fashion</Text>
            <Text style={styles.detail}>Present project updates to supervisor</Text>
            <Text style={styles.detail}>Deploy new or updated products to server</Text>
            <Text style={styles.detail}>Hands on ticketing system for daily task and keep
                working environment updated</Text>
            <Text style={styles.detail}>Collaborate closely with coworkers to plan,
                design, and develop robust solutions</Text>
            <Text style={styles.detail}>Assist team members to verify, develop, and test
                script files and products</Text>
            <Text style={styles.detail}>Write intensive, readable, and precise code to
                improve product’s development</Text>
            <Text style={styles.detail}>Participate in meeting and trainings for personal
                development</Text>
        </View>
        <View>
            <Text style={styles.porsition}>Ask Applications (Yonkers, NY) - Boot-camp Participant</Text>
            <Text style={styles.detail}>Developed and maintain Web Applications</Text>
            <Text style={styles.detail}>Developed Google Chrome Extensions</Text>
            <Text style={styles.detail}>Developed projects including API calls and
                manipulating data from server</Text>
        </View>
        <View>
            <Text style={styles.porsition}>East Side House Settlement (Bronx, NY)</Text>
            <Text style={styles.detail}>Instructed clients in the ages 16 to 24 in different
                levels of Algebra, Geometry, and Pre-calculus</Text>
            <Text style={styles.detail}>Created and implemented lesson throughout the
                academic year</Text>
            <Text style={styles.detail}>Established rules and regulations to ensure a health
                classroom environment</Text>
            <Text style={styles.detail}>Tutored clients daily for reinforcement in Math</Text>
            <Text style={styles.detail}>Created and updated math website to better students
                learning experience</Text>
        </View>
    </View>
    )
}
    // Some other JSX
export const Passion = () => {
    return (
        <View>
            <Text style={styles.title}>Passion</Text>
            <Text style={styles.category}>Web Development</Text>
            <Text style={styles.category}>Building APIs</Text>
            <Text style={styles.category}>Write readable code</Text>
            <Text style={styles.category}>Support others</Text>
            <Text style={styles.category}>Challenge and proof myself</Text>
            <Text style={styles.category}>Have fun</Text>
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
        color: 'black',
        margin: '10px 10px'
    },
    title: {
        fontSize: 40,
        color: '#00008B',
        textAlign: 'center',
        fontWeight: 'bold',
        margin:10
    },
    porsition: {
        fontSize: 35,
        color: '#00BFFF',
        textAlign: 'center',
    },
    detail: {
        textAlign: 'center',
        fontSize: 20,
        color: 'black',
        marginLeft: 5,
        marginRight: 5
    }
});