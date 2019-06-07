import React from 'react'
import {
	Image,
	ImageBackground,
	StyleSheet,
} from 'react-native'
import { colors } from '../../styles'
import { Video } from 'expo';

import ImgBackgroundDevice from '../../../assets/devicebackground.jpg'


export default class StreamingScreen extends React.Component {
	static navigationOptions = {
		title: 'SmartFeed',
		headerStyle: {
			backgroundColor: colors.secondary
		},
		headerTintColor: colors.white
	}

	render() {
		return (
			<ImageBackground style={styles.picture} source={ImgBackgroundDevice}>
				<Video
					source={{
						uri: `http://${global.IpAddress}:5555/video`,
						method: 'GET',
						headers:{
          					'password': global.password
						},
					}}
					rate={1.0}
					volume={1.0}
					isMuted={false}
					resizeMode="cover"
					shouldPlay
					isLooping
					style={{ width: 300, height: 300 }}
				/>
				<Image source={{uri: `http://${global.IpAddress}:5555/video`,
								method: 'GET',
								headers:{
          							'password': global.password
								},
							}}
       				style={{width: 400, height: 400}} />
			</ImageBackground>
		)
	}
}

const styles = StyleSheet.create({
	picture: {
		flex: 1,
		height: null,
		resizeMode: 'cover',
		width: null,
	},
	headerText: {
		color: colors.tertiary4,
		fontSize: 20,
		fontStyle: 'italic',
		marginTop: 15,
	},
	imageStyle: {
		alignSelf: 'center',
		height: 30,
		marginLeft: 15,
		width: 30
	},
	titleInfoStyle: {
		color: '#8e8e93',
		fontSize: 16,
	},
	backgroundVideo: {
		position: 'absolute',
		alignSelf: 'center',
		top: 0,
		left: 0,
		bottom: 0,
		right: 0,
	}
})