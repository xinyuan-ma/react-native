import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View ,Image } from 'react-native';
import {scaleSize, scaleHeight, setSpText, setSpText2} from '../../layout'
import { Dimensions } from 'react-native';
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
    basisOption: {
        width: Dimensions.get('window').width / 4,
        // height: 50,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: scaleHeight(46)
        // borderStyle: 'solid',
        // borderWidth: 1,
        // borderColor: 'red'
    },
    imgStyle: {
        width: scaleSize(60),
        height: scaleSize(60)
    },
    textTest: {
        marginTop: scaleSize(8),
        fontSize: setSpText(22),
        textAlign: 'center'
    }
});

