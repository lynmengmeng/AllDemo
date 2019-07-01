import React, { Component } from 'react';
import {
    Text,
    View,
    TouchableHighlight,
    Image
} from 'react-native';
import styles from '../Styles/Keyboard';

const numberKeys = [
    [
        {mainText: '1'},
        {mainText: '2'},
        {mainText: '3'},
        {mainText: '删除'}
    ],
    [
        {mainText: '4'},
        {mainText: '5'},
        {mainText: '6'},
        {mainText: '清空'}
    ],
    [
        {mainText: '7'},
        {mainText: '8'},
        {mainText: '9'},
        {mainText: '确定'}
    ],
    [
        {mainText: '0'},
        {mainText: '00'},
        {mainText: '.'}
    ]
];

export default class Keyboard extends Component{

    _renderKey(key, index) {
        return (
            <TouchableHighlight
                key={index}
                underlayColor={'#ccc'}
                style={key.mainText === '确定' ? styles.wrapperMax : styles.wrapper}
                onPress={() => {
                    this.props.setKeyBoard.apply(this, [key, index]);
                }}
            >
                <View style={styles.textWrapper}>
                    {key.mainText === '删除' ?<Text style={styles.mainText}>{key.mainText}</Text>: <Text style={styles.mainText}>{key.mainText}</Text>}
                </View>
            </TouchableHighlight>
        );
    }




    renderNumberKeys() {
        return (
            <View style={styles.numberKeysWrapper}>
                {numberKeys.map((group, groupIndex) => {
                    return (
                        <View key={groupIndex} style={{flex: 1, flexDirection: 'row'}}>
                            {group.map(this._renderKey.bind(this))}
                        </View>
                    );
                })}
            </View>
        )
    }

    render(){
        if(this.props.isShowKeyboard){
            return(
                <View style={styles.container}>
                    {this.renderNumberKeys()}
                </View>
            )
        }else{
            return null
        }
    }
}

