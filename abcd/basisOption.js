import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View ,Image } from 'react-native';
export default class BasisOption extends Component {

    render() {
        return (
            <View style={styles.basisOption} key={this.props.item.title}>
                <Image style={styles.imgStyle} source={this.props.item.icon}/>
                <Text style={styles.textTest} >{this.props.item.title}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    bigBlue: {
        flex: 1,
        justifyContent: 'space-between',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    basisOption: {
        width: 90,
        height: 50,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30
    },
    imgStyle: {
        width: 30,
        height: 30
    },
    textTest: {
        fontSize: 11,
        textAlign: 'center'
    }
});

