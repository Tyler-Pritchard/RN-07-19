import React, { Component } from 'react'
import { ScrollView } from 'react-native'

class About extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    static navigationOptions = {
        title: 'About Us'
    }

    render() {
        const { navigate } = this.props.navigation;

        return (
            <ScrollView>
                
            </ScrollView>
        );
    }
}

export default About;