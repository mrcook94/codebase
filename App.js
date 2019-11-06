/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format

 */

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
// import Reactotron from 'reactotron-react-native';
// import ReactotronConfig from 'libraries/utils/ReactotronConfig';
import configureStore from 'my-redux/stores/configureStore';
import rootSaga from 'my-redux/sagas';
import DropdownManager from 'libraries/components/DropdownAlert/DropdownManager';
import colors from 'assets/colors';
import LoadingModal from 'libraries/components/LoadingModal';
import LoadingManager from 'libraries/components/LoadingModal/LoadingManager';
import NavigationServices from 'routers/NavigationServices';
import MainNavigation from 'routers/MainNavigation';
import RootView from 'screens/RootView';
import DropdownAlert from 'react-native-dropdownalert'

// const reactotron = ReactotronConfig.configure();
// const sagaMonitor = Reactotron.createSagaMonitor();
const sagaMiddleware = createSagaMiddleware();

// const store = configureStore(reactotron, sagaMiddleware);
const store = configureStore(sagaMiddleware);
// Reactotron.clear();

sagaMiddleware.run(rootSaga);

export default class App extends Component {

	componentDidMount() {
		LoadingManager.register(this.loadingRef);
		DropdownManager.register(this.dropDownAlertRef);
	}

	componentWillUnmount() {
		LoadingManager.unregister(this.loadingRef);
		DropdownManager.unregister(this.dropDownAlertRef);
	}

	render() {
		return (
			<Provider store={store}>
				<RootView>
					<MainNavigation
						ref={navigatorRef => NavigationServices.setTopLevelNavigator(navigatorRef)}
					/>
					<LoadingModal ref={(ref) => { this.loadingRef = ref; }} />
					<DropdownAlert
						inactiveStatusBarBackgroundColor={colors.primaryColor}
						successImageSrc={null}
						infoImageSrc={null}
						warnImageSrc={null}
						errorImageSrc={null}
						ref={ref => {
							this.dropDownAlertRef = ref;
						}}
					/>
				</RootView>
			</Provider>
		);
	}
}
