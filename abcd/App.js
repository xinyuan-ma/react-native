import React, { Component } from 'react';
import { Dimensions } from 'react-native';
import { StyleSheet, Text, View, Image, ScrollView, ImageBackground } from 'react-native';
import Header from './static/view/header.js';
import OptionsBar from './static/view/optionsBar'
import Swiper from './static/view/swiper'
import NineGrid from './static/view/nineGrid'
import Tabbar from './static/view/tabbar'
import NativeTabbar from './static/view/nativeTabbar'
import Brand from './static/view/brand'
import Ysh from './static/view/ysh'

import {scaleSize, scaleHeight} from './layout'

let screenW = Dimensions.get('window').width;

console.log(screenW, 'screenW');
export default class HelloWorldApp extends Component {
    render() {
        return (
            <View>
                <ScrollView>
                    <View style={styles.container}>
                        <Header></Header>
                        <OptionsBar></OptionsBar>
                        <Text style={styles.title}>这里是上海<Text style={styles.detail}>   海纳百川 追求卓越</Text></Text>
                        <ImageBackground style={styles.playContent} source={require('./static/image/video.jpg')} imageStyle={{borderRadius:4}}>
                            <Image style={styles.play} source={require('./static/image/play_district.png')}></Image>
                        </ImageBackground>
                        <Swiper></Swiper>
                        <Text style={styles.bigTitle}>我喜欢上海<Text style={styles.detail}>   开明睿智 大气谦和</Text></Text>
                        <NineGrid></NineGrid>
                        <Text style={styles.bigTitle}>上海品牌<Text style={styles.detail}>   持续更新中</Text></Text>
                        <Brand></Brand>
                        <Ysh></Ysh>
                    </View>
                </ScrollView>
                {/*<Tabbar></Tabbar>*/}
                <NativeTabbar></NativeTabbar>
            </View>
        );
    }
}

const styles = StyleSheet.create ({
    container: {
        marginBottom: scaleHeight(90),
        backgroundColor: '#FFFFFF'
    },
    options: {

    },
    title: {
        fontSize: 18,
        marginLeft: 15,
        marginBottom: 15,
        marginTop: 15
    },
    bigTitle: {
        fontSize: 18,
        marginLeft: 15,
        marginBottom: 15,
        marginTop: 30
    },
    detail: {
        fontSize: 12,
        color: '#666666'
    },
    playContent: {
        width: 345,
        height: 165,
        marginBottom: 15,
        marginHorizontal: 15,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    play: {
        position: 'absolute',
        zIndex: 1,
        width: 60,
        height: 60
    },
    swiper: {

    }
})
