/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings([
	'Warning: componentWillMount is deprecated',
	'Warning: componentWillReceiveProps is deprecated'
]);
// GLOBAL.XMLHttpRequest = GLOBAL.originalXMLHttpRequest || GLOBAL.XMLHttpRequest;
AppRegistry.registerComponent(appName, () => App);
