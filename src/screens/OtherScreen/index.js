import React, { Component } from 'react';
import { View, Text } from 'react-native';
import colors from 'assets/colors';
import { TouchableOpacity } from 'react-native-gesture-handler';
import NavigationServices from 'routers/NavigationServices';

class OtherScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={{
                flex: 1,
                backgroundColor: colors.blue900,
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <Text style={{
                    fontSize: 16,
                    fontWeight: '700'
                }}>{'Other Screen'}</Text>

                <TouchableOpacity
                    style={{
                        padding: 10,
                        borderRadius: 5,
                        backgroundColor: '#000000'
                    }}
                    onPress={() => { NavigationServices.pop() }}
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

export default OtherScreen
