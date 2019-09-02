import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	TextInput,
	View,
	Image,
	Dimensions,
} from 'react-native';
import {scaleSize, scaleHeight, setSpText, setSpText2} from '../../layout'
import BasisOption from './basisOption'
const details = [
    {title:'旅游',icon:require('../image/nine/nine_1.jpg')},
    {title:'美食',icon:require('../image/nine/nine_2.jpg')},
    {title:'交通',icon:require('../image/nine/nine_3.jpg')},
    {title:'会展',icon:require('../image/nine/nine_4.jpg')},
    {title:'文化',icon:require('../image/nine/nine_5.jpg')},
    {title:'购物',icon:require('../image/nine/nine_6.jpg')},
    {title:'体育',icon:require('../image/nine/nine_7.jpg')},
    {title:'康养',icon:require('../image/nine/nine_8.jpg')},
    {title:'科教',icon:require('../image/nine/nine_9.jpg')}
]
export default class OptionsBar extends Component {
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
		// paddingHorizontal: 15,
		paddingLeft: 15,
		flexDirection: 'row',
		flexWrap: 'wrap'
		// height: (Dimensions.get('window').width - 30 - 21) + 40
	},
    bigBlue: {
    	width: (Dimensions.get('window').width - 60) / 3,
		height: (Dimensions.get('window').width - 60) / 3,
		position: 'relative',
		paddingBottom: scaleHeight(21),
		marginRight: 15,
		marginBottom: 15
    },
	image: {
		width: (Dimensions.get('window').width - 60) / 3,
		height: (Dimensions.get('window').width - 60) / 3,
		borderRadius: 8
	},
	text: {
		position: 'absolute',
		fontSize: setSpText(32),
		top: 12,
		left: 18
	}
});

