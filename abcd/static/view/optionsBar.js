import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View ,Image } from 'react-native';
import BasisOption from './basisOption'
import { scaleHeight } from '../../layout';
const details = [
    {title:'资讯',icon:require('../image/optionsBar/icon_zixun.png')},
    {title:'酒店',icon:require('../image/optionsBar/icon_jiudian.png')},
    {title:'特产',icon:require('../image/optionsBar/icon_techan.png')},
    {title:'演艺',icon:require('../image/optionsBar/icon_yanyi.png')},
    {title:'门票',icon:require('../image/optionsBar/icon_menpiao.png')},
    {title:'机票',icon:require('../image/optionsBar/icon_airplane.png')},
    {title:'火车票',icon:require('../image/optionsBar/icon_train.png')},
    {title:'精品线路',icon:require('../image/optionsBar/icon_line.png')}
]
export default class OptionsBar extends Component {
    state = {
        text: ''
    }
    render() {
        return (
            <View style={styles.bigBlue}>{details.map((item, index) =>  <BasisOption item={item} key={index}></BasisOption>)}</View>
        );
    }
}

const styles = StyleSheet.create({
    bigBlue: {
        paddingTop: scaleHeight(46),
        flex: 1,
        justifyContent: 'space-between',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    basisOption: {
        width: 94,
        height: 50,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30
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

