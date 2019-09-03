import React, { Component } from 'react';
import {scaleSize, scaleHeight, setSpText} from '../../layout'
import { TouchableOpacity, StyleSheet, Text, View, Image, Dimensions, } from 'react-native';
const details = [
    {title:'首页',icon:require('../image/tabbar/lab_home_normal.png'),icon1:require('../image/tabbar/lab_home.png'), show: true},
    {title:'特惠',icon:require('../image/tabbar/lab_tehui_normal.png'),icon1:require('../image/tabbar/lab_tehui.png')},
    {title:'直供',icon:require('../image/tabbar/lab_fujin_normal.png'),icon1:require('../image/tabbar/lab_fujin.png')},
    {title:'投诉',icon:require('../image/tabbar/lab_fuwu_normal.png'),icon1:require('../image/tabbar/lab_fuwu.png')},
    {title:'我的',icon:require('../image/tabbar/lab_wode_normal.png'),icon1:require('../image/tabbar/lab_wode.png')}
]
export default class Tabbar extends Component {
    constructor (props) {
    	super(props)
		this.state = { details };
	}
    changeColor (index) {
		this.setState({details: this.change(details, index)});
	}
	_onPressButton() {
		// alert('点击事件亦被促发');
	}
	change (details, index) {
		details.forEach(item => {
			item.show =false
		})
		details[index].show = true
		console.log(1122111);
	}
    render() {
        return (
        	<View style={styles.container}>
				{details.map((item, index) =>
				<TouchableOpacity onPress={() => this.changeColor(index)} key={index} style={styles.bigBlue} activeOpacity={1}>
					<View  key={index + 1}><Image style={styles.image} key={item.title} source={item.show? item.icon1 : item.icon}></Image><Text style={[styles.text, item.show? styles.active: '']} key={item.title + 1}>{item.title}</Text></View>
				</TouchableOpacity>)}
			</View>
        );
    }
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#FFFFFF',
		borderTopColor: '#eaeaea',
		borderTopWidth: 1,
		borderStyle: 'solid',
		flexDirection: 'row',
		flexWrap: 'wrap',
		position: 'absolute',
		zIndex: 2,
		bottom: 0
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
		color: '#666666'
	},
	active: {
		color: 'red'
	}
});

