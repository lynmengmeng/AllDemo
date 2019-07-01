import React from 'react';
import {Button, View, Text} from 'react-native';

export default class Home extends React.Component {
    render() {
        return (
            <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
                <Text>Home</Text>
                <Text>{this.props.pwd}</Text>
                <Text>{this.props.user}</Text>
                <Button title={'go to login'} onPress={() => {
                    this.props.navigation.navigate('Login')
                }}/>
            </View>
        );
    }
}
