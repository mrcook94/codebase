import React, { Component } from 'react';
import { View, Text } from 'react-native';
import colors from 'assets/colors';
import strings from 'assets/strings';
import { TouchableOpacity } from 'react-native-gesture-handler';
import SCREEN_NAME from 'libraries/constants/screenName';
import { connect } from 'react-redux'
import { loginAction } from 'my-redux/actions'
import NavigationServices from 'routers/NavigationServices';
import { showAlert, TYPE } from 'libraries/components/DropdownAlert';

class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={{
                flex: 1,
                backgroundColor: colors.red900,
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <Text style={{
                    fontSize: 16,
                    fontWeight: '700'
                }}>{strings.welcome}</Text>
                <TouchableOpacity
                    style={{
                        padding: 10,
                        borderRadius: 5,
                        backgroundColor: colors.white100
                    }}
                    onPress={() => {
                        NavigationServices.navigate(SCREEN_NAME.OTHER_SCREEN)
                        this.props.loginAction()
                        showAlert(TYPE.SUCCESS, '', 'Login successful')
                    }}
                >
                    <Text style={{
                        fontSize: 16,
                        fontWeight: '700'
                    }}>CONTINUE</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{
                        padding: 10,
                        borderRadius: 5,
                        backgroundColor: '#000000'
                    }}
                    onPress={() => { this.props.navigation.navigate(SCREEN_NAME.SPLASH_SCREEN) }}
                >
                    <Text style={{
                        fontSize: 16,
                        fontWeight: '700',
                        color: '#FFFFFF'
                    }}>BACK</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default connect(null, {
    loginAction
})(HomeScreen);
