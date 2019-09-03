import React, { Component } from "react";
import { Image, FlatList, StyleSheet, Text, View } from "react-native";
import {scaleSize, scaleHeight, setSpText } from '../../layout'
import RSADecryptOrEncrypt from '../../RSADecryptOrEncrypt'
var REQUEST_URL = "http://gateway.visitshanghai.com.cn/search/search/queryProduct";

export default class Brand extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [],
			loaded: false
		};
		// 在ES6中，如果在自定义的函数里使用了this关键字，则需要对其进行“绑定”操作，否则this的指向会变为空
		// 像下面这行代码一样，在constructor中使用bind是其中一种做法（还有一些其他做法，如使用箭头函数等）
		this.fetchData = this.fetchData.bind(this);
	}

	componentDidMount() {
		this.fetchData();
	}

	fetchData() {
		const params = {
			channel: 1,
			city: 4,
			language: 7,
			categoryId: '13',
			offset: 10,
			start: 0,
			lat: '31.24916171',
			lon: '121.48789949',
			topFlag: true
		}
		fetch(REQUEST_URL, {
			method: 'POST',
			credentials: 'include',
			headers: {
				'appName': 'BGSH_CHINA',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				body: RSADecryptOrEncrypt.RSApublicEncrypt(JSON.stringify(params)),
				version: '1.1',
				channelCode: '10008',
				appName: 'BGSH_CHINA'
			})
		})
		.then(response => response.json())
		.then(responseData => {
			console.log(responseData.data.result, 'responseData');
			// 注意，这里使用了this关键字，为了保证this在调用时仍然指向当前组件，我们需要对其进行“绑定”操作
			this.setState({
				data: this.state.data.concat(responseData.data.result),
				loaded: true
			});
		});
	}

	render() {
		if (!this.state.loaded) {
			return this.renderLoadingView();
		}

		return (
			<FlatList
				data={this.state.data}
				renderItem={this.renderMovie}
				style={styles.list}
				keyExtractor={item => item.id}
			/>
		);
	}

	renderLoadingView() {
		return (
			<View style={styles.container}>
				<Text>Loading movies...</Text>
			</View>
		);
	}

	renderMovie({ item }) {
		// { item }是一种“解构”写法，请阅读ES2015语法的相关文档
		// item也是FlatList中固定的参数名，请阅读FlatList的相关文档
		return (
			<View style={styles.container}>
				<Image
					source={{ uri: item.medias[0].url }}
					style={styles.thumbnail}
				/>
				<Text style={styles.title}>{item.title}</Text>
				<Text style={styles.simpleInfo}>{item.simpleInfo}</Text>
			</View>
		);
	}
}

var styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		backgroundColor: "#FFFFFF",
		borderRadius: 8,
		marginBottom: scaleHeight(30)
	},
	title: {
		fontSize: setSpText(26),
		fontWeight: '600',
		marginVertical: scaleHeight(20),
		paddingLeft: scaleSize(20)
	},
	simpleInfo: {
		fontSize: setSpText(24),
		marginBottom: scaleHeight(30),
		color: '#999999',
		paddingLeft: scaleSize(20)
	},
	thumbnail: {
		width: scaleSize(690),
		height: scaleHeight(280)
	},
	list: {
		paddingHorizontal: scaleSize(30),
		backgroundColor: "#F5F5F5"
	}
});
