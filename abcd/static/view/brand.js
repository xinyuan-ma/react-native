import React, { Component } from 'react';
import {scaleSize, scaleHeight, setSpText} from '../../layout'
import { TouchableOpacity, StyleSheet, Text, View, Image, Dimensions, } from 'react-native';
let REQUEST_URL = ''
export default class Tabbar extends Component {
    constructor (props) {
    	super(props)
		this.state = {
    		details: []
    	};
	}
	componentDidMount() {
		this.fetchData();
	}
	fetchData() {
		fetch(REQUEST_URL)
		.then(response => response.json())
		.then(responseData => {
			// 注意，这里使用了this关键字，为了保证this在调用时仍然指向当前组件，我们需要对其进行“绑定”操作
			this.setState({
				data: this.state.data.concat(responseData.movies),
				loaded: true
			});
		});
	}
    changeColor (index) {
		this.setState({details: this.change(details, index)});
	}
	change (details, index) {
		details.forEach(item => {
			item.show =false
		})
		details[index].show = true
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
    	flex: 1,
		height: scaleHeight(300),
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

