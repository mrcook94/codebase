import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import SCREEN_NAME from 'libraries/constants/screenName';

class SplashScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <TouchableWithoutFeedback onPress={() => { this.props.navigation.navigate(SCREEN_NAME.MAIN_STACK) }}>
                <View style={styles.container}>
                    <Text> Splash </Text>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

export default SplashScreen;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
})