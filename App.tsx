/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useState} from 'react';
import {
	SafeAreaView,
	StyleSheet,
	ScrollView,
	View,
	Text,
	StatusBar,
	Button,
} from 'react-native';

import {Header, Colors} from 'react-native/Libraries/NewAppScreen';

declare var global: {HermesInternal: null | {}};

const App = () => {
	const [num, setNum] = useState(0);
	return (
		<>
			<StatusBar barStyle="dark-content" />
			<SafeAreaView>
				<ScrollView
					testID="scroll-view"
					contentInsetAdjustmentBehavior="automatic"
					style={styles.scrollView}>
					<Header />
					<View style={styles.body}>
						<View style={styles.sectionContainer}>
							<Text style={styles.sectionDescription}>
								Edit <Text style={styles.highlight}>{num}</Text>
							</Text>
							<Button
								title="simple button"
								onPress={() => setNum(n => n + 1)}
								testID="simple-button"
							/>
						</View>
					</View>
				</ScrollView>
			</SafeAreaView>
		</>
	);
};

const styles = StyleSheet.create({
	scrollView: {
		backgroundColor: Colors.lighter,
	},
	engine: {
		position: 'absolute',
		right: 0,
	},
	body: {
		backgroundColor: Colors.white,
		height: 1000,
	},
	sectionContainer: {
		marginTop: 32,
		paddingHorizontal: 24,
	},
	sectionTitle: {
		fontSize: 24,
		fontWeight: '600',
		color: Colors.black,
	},
	sectionDescription: {
		marginTop: 8,
		fontSize: 18,
		fontWeight: '400',
		color: Colors.dark,
	},
	highlight: {
		fontWeight: '700',
	},
	footer: {
		color: Colors.dark,
		fontSize: 12,
		fontWeight: '600',
		padding: 4,
		paddingRight: 12,
		textAlign: 'right',
	},
});

export default App;
