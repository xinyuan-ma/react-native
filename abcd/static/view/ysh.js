import React, { Component } from "react";
import { Image, FlatList, StyleSheet, Text, View } from "react-native";
import {scaleSize, scaleHeight, setSpText } from '../../layout';

export default class Ysh extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Image style={styles.img} source={require('../image/copyright.png')} />
				<Text style={styles.text}>- 上海城市推广中心出品 -</Text>
			</View>
		);
	}
}

var styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: "center",
		backgroundColor: "#F5F5F5",
		borderRadius: 8,
		marginBottom: scaleHeight(30)
	},
	img: {
		fontWeight: '600',
		width: scaleSize(74),
		height: scaleHeight(32),
		marginBottom: scaleHeight(20)
	},
	text: {
		marginBottom: scaleHeight(20)
	}
});
