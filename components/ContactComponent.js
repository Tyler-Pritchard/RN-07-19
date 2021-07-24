import React, { Component } from 'react'
import { ScrollView } from 'react-native'



class Contact extends Component {

    constructor(props) {
        super(props);
        this.state = {
            campsites: CAMPSITES
        };
    }

    static navigationOptions = {
        title: 'Contact Us'
    }

    render() {
        const { navigate } = this.props.navigation;
        
        return (
            <ScrollView>
                
            </ScrollView>
        );
    }
}

export default Contact;