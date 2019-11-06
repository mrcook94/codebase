import { createStackNavigator } from 'react-navigation-stack';
import SCREEN_NAME from 'libraries/constants/screenName';
import HomeScreen from 'screens/HomeScreen';
import OtherScreen from 'screens/OtherScreen';

const MainNavigator = createStackNavigator(
  {
    [SCREEN_NAME.HOME_SCREEN]: { screen: HomeScreen },
    [SCREEN_NAME.OTHER_SCREEN]: OtherScreen
  },
  {
    headerMode: 'none'
  }
);
export default MainNavigator;
