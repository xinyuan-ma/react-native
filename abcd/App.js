import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Blink extends Component {

    render() {
        return (
            <View>
                <Text style={[styles.bigBlue, styles.red]}>修改颜色</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    bigBlue: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 30
    },
    red: {
        color: 'red',
    },
});
