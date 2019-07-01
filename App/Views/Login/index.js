import React from 'react';
import {Button, View, Text, TextInput} from 'react-native';
import Styles from '../../Styles/Login'

export default class Index extends React.Component {

    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            userName:'',
            passWord:''
        }
    }

    render() {
        return (
            <View style={Styles.container}>
                <Text>第2个版本</Text>
                <View>
                    <Text>请输入用户名</Text>
                    <Text style={Styles.textInput} onPress={()=>{this.props.isShowKeyboard.apply(this, ["username"])}}>{this.props.username}</Text>
                </View>
                <View>
                    <Text>请输入密码</Text>
                    <Text style={Styles.textInput} onPress={()=>{this.props.isShowKeyboard.apply(this, ["pwd"])}}>{this.props.pwd}</Text>
                </View>
                <Button title={'Login'} onPress ={()=>{this.props.login.apply(this,[this.state.userName,this.state.passWord])}}
                />
            </View>
        );
    }
}
