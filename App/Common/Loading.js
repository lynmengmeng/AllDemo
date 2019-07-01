import React, { Component } from 'react';
import {
    Text,
    View,
    ProgressBarAndroid,
    StyleSheet
} from 'react-native';

export default class Loading extends Component{
    render(){
        if(this.props.isShowLoading){
            return(
                <View style={styles.container}>
                    <ProgressBarAndroid color='#fff' styleAttr='Inverse'/>
                    <Text style={styles.text}>{this.props.loadingText}</Text>
                </View>
            )
        }else{
            return null
        }
    }
}

const styles = StyleSheet.create({
    container:{
        position: 'absolute',
        flex:1,
        left:0,
        top:0,
        width:'100%',
        height:'100%',
        backgroundColor:'rgba(0,0,0,.6)',
        justifyContent:'center',
        alignItems:'center',
        zIndex:2
    },
    text:{
        color:'#fff',
        fontSize:25,
        marginTop:20
    }
})
