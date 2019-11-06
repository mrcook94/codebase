import React, { Component } from 'react';
import { View, StyleSheet, Dimensions, Platform, PixelRatio } from 'react-native';

export const { width, height } = Dimensions.get('screen');
export const pixelRatio = PixelRatio.get()
export const platformOS = Platform.OS

class RootView extends Component {
    constructor(properties) {
        super(properties);
    }

    render() {
        return (
            <View style={styles.container}>
                {this.props.children}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})

export default RootView
