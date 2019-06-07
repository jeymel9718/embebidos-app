import { createStackNavigator } from 'react-navigation'

import LoginScreen from './src/screens/login'
import HomeScreen from './src/screens/home'
import StreamingScreen from './src/screens/streaming'

const App = createStackNavigator({
  Home: { screen: HomeScreen },
  Login: { screen: LoginScreen },
  Video: { screen: StreamingScreen }
},
  {
    initialRouteName: 'Login'
  })

export default App