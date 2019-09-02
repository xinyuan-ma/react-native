import React, { Component } from 'react';
import Swiper from  'react-native-swiper';
import { StyleSheet, Text, TextInput, View ,Image } from 'react-native';
import {scaleSize, scaleHeight, setSpText, setSpText2} from '../../layout'

export default class Header extends Component {
    state = {
        text: ''
    }

    render() {
        return (

            <Swiper
                style={styles.swipers}
				height={110}
                loop={true}
                autoplay={true}
                autoplayTimeout={3}
                horizontal={true}
                paginationStyle={{bottom: 10}}
                showsButtons={false}
				dotStyle={styles.dotStyle}>
				<View style={styles.swipersContent}>
					<Image source={require('../image/video.jpg')} style={styles.img}/>
					<Text style={styles.text}>轮播1</Text>
				</View>
               	<View style={styles.swipersContent}>
					<Image source={require('../image/tour-service.jpg')} style={styles.img}/>
					<Text style={styles.text}>轮播2</Text>
				</View>
				<View style={styles.swipersContent}>
					<Image source={require('../image/video.jpg')} style={styles.img}/>
					<Text style={styles.text}>轮播3</Text>
				</View>
            </Swiper>
        );
    }
}

const styles = StyleSheet.create({
    swipers: {
        // width: 345,
        // height: 165,
        // marginBottom: 15,
        // borderRadius: 8
    },
	swipersContent: {
		width: 345,
		height: 110,
		position: 'relative'
	},
    img: {
        marginHorizontal: 15,
        width: 345,
        height: 110,
        borderRadius: 4
    },
	text: {
		position: 'absolute',
		left: 30,
		bottom: 15,
		fontSize: setSpText(36)
	}
});

