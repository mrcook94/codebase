import { createSwitchNavigator, createAppContainer } from 'react-navigation';
// import AuthNavigator from 'libraries/components/AuthTemplate/Airbnb/AuthNavigator';
import SCREEN_NAME from 'libraries/constants/screenName';
import MainNavigator from './MainNavigator';
import SplashScreen from 'screens/SplashScreen';


const mainStack = createSwitchNavigator({
  // Auth: AuthNavigator,
  [SCREEN_NAME.SPLASH_SCREEN]: { screen: SplashScreen },
  [SCREEN_NAME.MAIN_STACK]: MainNavigator
})
const MainNavigation = createAppContainer(mainStack);

export default MainNavigation;