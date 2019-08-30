import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View ,Image } from 'react-native';


export default class Header extends Component {
    state = {
        text: ''
    }

    render() {
        return (
            <View style={styles.bigBlue}>
                <Text style={styles.text}>上海</Text>
                <Image style={styles.triangle} source={require('./static/image/icon_down.png')} />
                <TextInput
                    style={styles.input}
                    placeholder="input"
                    onChangeText={(text) => this.setState({text})}
                    value={this.state.text}
                />
                <Image style={[styles.img, styles.imgFirst]} source={require('./static/image/map.png')} />
                <Image style={styles.img} source={require('./static/image/message.png')} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    bigBlue: {
        marginTop: 25,
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 30,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: 'row',
        paddingLeft: 15,
        paddingRight: 17
    },
    triangle: {
        width: 10,
        height: 6,
        color: '#000000',
        marginRight: 10
    },
    text: {
        // marginRight: 15
    },
    input: {
        width: 240,
        height: 28,
        backgroundColor: '#F1F1F1',
        borderRadius: 14,
        textAlign: "center"
    },
    img: {
        width: 18,
        height: 18
    },
    imgFirst: {
        margin: 12
    }
});

