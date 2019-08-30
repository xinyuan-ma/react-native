import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './header.js';
import OptionsBar from './optionsBar'
export default class HelloWorldApp extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Header></Header>
                <OptionsBar></OptionsBar>
                <Text>Hello, 1111world</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        justifyContent: 'space-between'
    }
})
