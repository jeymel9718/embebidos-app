import React from 'react'
import {
  Image,
  ImageBackground,
  StyleSheet,
} from 'react-native'
import SettingsList from 'react-native-settings-list'
import { colors } from '../../styles'

import ImgBackgroundDevice from '../../../assets/devicebackground.jpg'
import FeedIcon from '../../../assets/animal-feed.png'
import PlayIcon from '../../../assets/play.png'
import DogIcon from '../../../assets/fish.png'

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'SmartFeed',
    headerStyle: {
      backgroundColor: colors.secondary
    },
    headerTintColor: colors.white
  }

  constructor() {
    super();
    this.state = {
      window1Value: false,
      window2Value: false,
      temperature: '25.0',
      humidity: '15',
    }
  }

  _onFeedChange = () =>{
    this.setState({
      window1Value: !this.state.window1Value
    })
  }

  render() {
    return (
      <ImageBackground style={styles.picture} source={ImgBackgroundDevice}>
        <SettingsList borderColor={colors.tertiary} defaultItemSize={50}>
          <SettingsList.Header headerStyle={styles.headerText} headerText='Menu' />
          <SettingsList.Item
            hasNavArrow={false}
            icon={<Image style={styles.imageStyle} source={FeedIcon} />}
            title='Alimentar'
            titleInfo='Dar de comer'
            titleInfoStyle={styles.titleInfoStyle}
            hasSwitch={true}
            switchOnValueChange={this._onFeedChange}
            switchState={this.state.window1Value}
          />
          <SettingsList.Item
            hasNavArrow={false}
            icon={<Image style={styles.imageStyle} source={DogIcon} />}
            title='Porciones restantes: '
            titleInfo='5'
            titleInfoStyle={styles.titleInfoStyle}
          />
          <SettingsList.Header headerStyle={styles.headerText} headerText='Streaming' />
          <SettingsList.Item
            hasNavArrow={true}
            icon={<Image style={styles.imageStyle} source={PlayIcon}/>}
            title='Camara'
            titleInfo='Video en tiempo real'
            onPress={() => {this.props.navigation.navigate('Video')}}
          />
        </SettingsList>
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
  }
});
