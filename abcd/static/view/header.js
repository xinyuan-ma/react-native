import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View ,Image } from 'react-native';
import {scaleSize, scaleHeight, setSpText, setSpText2} from '../../layout'

console.log(setSpText(20));
console.log(setSpText2(20), '111');
console.log(scaleSize(20));
console.log(scaleHeight(20));
export default class Header extends Component {
    state = {
        text: ''
    }

    render() {
        return (
            <View style={styles.bigBlue}>
                <Text style={styles.text}>上海</Text>
                <Image style={styles.triangle} source={require('../image/icon_down.png')} />
                {/*<TextInput*/}
                    {/*style={styles.input}*/}
                    {/*placeholder="input"*/}
                    {/*onChangeText={(text) => this.setState({text})}*/}
                    {/*value={this.state.text}*/}
                {/*/>*/}
                <View style={styles.input}>
                    <Image style={styles.inputImg} source={require('../image/icon_search.png')} />
                    <Text style={styles.inputText}>东方明珠</Text>
                </View>
                <Image style={[styles.img, styles.imgFirst]} source={require('../image/map.png')} />
                <Image style={styles.img} source={require('../image/message.png')} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    bigBlue: {
        marginTop: scaleSize(58),
        color: 'blue',
        fontWeight: 'bold',
        justifyContent: "center",
        alignItems: "center",
        flexDirection: 'row',
        paddingLeft: scaleSize(30),
        paddingRight: scaleSize(34)
    },
    triangle: {
        width: 10,
        height: 6,
        marginRight: 10
    },
    text: {
        fontSize: scaleSize(22)
    },
    input: {
        width: 240,
        height: 28,
        backgroundColor: '#F2F2F2',
        borderRadius: 14,
        textAlign: "center",
        alignItems: "center",
        justifyContent: 'center',
        flexDirection: 'row'
    },
    inputImg: {
        width: scaleSize(30),
        height: scaleHeight(30),
        marginRight: scaleSize(10)
    },
    inputText: {
        fontSize: setSpText(22),
        fontWeight: '400',
        color: '#999999'
    },
    img: {
        width: 18,
        height: 18
    },
    imgFirst: {
        margin: 12
    }
});

