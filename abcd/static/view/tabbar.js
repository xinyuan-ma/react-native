import React, { Component } from 'react';
import {scaleSize, scaleHeight, setSpText} from '../../layout'

import {
	StyleSheet,
	Text,
	TextInput,
	View,
	Image,
	Dimensions,
} from 'react-native';
const details = [
    {title:'首页',icon:require('../image/tabbar/lab_home.png'), show: true},
    {title:'特惠',icon:require('../image/tabbar/lab_tehui_normal.png')},
    {title:'直供',icon:require('../image/tabbar/lab_fujin_normal.png')},
    {title:'投诉',icon:require('../image/tabbar/lab_fuwu_normal.png')},
    {title:'我的',icon:require('../image/tabbar/lab_wode_normal.png')}
]
export default class Tabbar extends Component {
    state = {
        text: ''
    }
    render() {
        return (
        	<View style={styles.container}>
				{details.map(item =>  <View style={styles.bigBlue}><Image style={styles.image} key={item.title} source={item.icon}></Image><Text style={styles.text} key={item.title + 1}>{item.title}</Text></View>)}
			</View>
        );
    }
}

const styles = StyleSheet.create({
	container: {

		flexDirection: 'row',
		flexWrap: 'wrap',
		// position: 'absolute',
		bottom: 0,
		zIndex: 1
	},
    bigBlue: {
    	width: (Dimensions.get('window').width) / 5,
		height: scaleHeight(128),
		position: 'relative',
		alignItems: 'center',
		justifyContent: 'center'
    },
	image: {
		width: scaleSize(40),
		height: scaleHeight(40)
	},
	text: {
		fontSize: setSpText(22),
		marginTop: scaleHeight(12),
		marginBottom: scaleHeight(20)
	}
});

