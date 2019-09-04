import TabNavigator from 'react-native-tab-navigator';
import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View ,Image } from 'react-native';
import {scaleSize, scaleHeight, setSpText} from '../../layout'


export default class NativeTabbar extends Component {
	state = {
		selectedIndex: 0
	}
	render () {
		return (
			<TabNavigator>
				<TabNavigator.Item title='首页'
								   selected={this.state.selectedIndex == 0}
								   titleStyle={{color:'#9d9d9d'}}
								   selectedTitleStyle={{color:'#ed7f30'}}
								   badgeText='首页'
								   allowFontScaling={true}
								   renderIcon={()=>
									   <Image source={require('../image/tabbar/lab_home_normal.png')} style={styles.iconStyle}/>
								   }
								   renderSelectedIcon={()=>
									   <Image source={require('../image/tabbar/lab_home.png')} style={styles.iconStyle}/>
								   }
								   onPress={()=>
									   this.setState({
										   selectedIndex:0
									   })
								   }
				>
					<View style={[styles.viewStyle, {backgroundColor:'red'}]}>
						<Text>首页</Text>
					</View>
				</TabNavigator.Item>

				<TabNavigator.Item title='我的'
								   selected={this.state.selectedIndex == 1}
								   titleStyle={{color:'#9d9d9d'}}
								   selectedTitleStyle={{color:'#ed7f30'}}
								   // badgeText={10}
								   renderIcon={()=>
									   <Image source={require('../image/tabbar/lab_home_normal.png')} style={styles.iconStyle}/>
								   }
								   renderSelectedIcon={()=>
									   <Image source={require('../image/tabbar/lab_home.png')} style={styles.iconStyle}/>
								   }
								   onPress={()=>
									   this.setState({
										   selectedIndex:1
									   })
								   }
				>
					<View style={[styles.viewStyle, {backgroundColor:'green'}]}>
						<Text>我的</Text>
					</View>

				</TabNavigator.Item>
			</TabNavigator>
		)
	}
}
const styles = StyleSheet.create({
	iconStyle: {
		width: scaleSize(40),
		height: scaleHeight(40)
	},
	viewStyle: {
		fontSize: setSpText(22),
		marginTop: scaleHeight(12),
		color: '#666666'
	},
	tabBarStyle: {
		marginLeft: scaleSize(20)
	}
})
