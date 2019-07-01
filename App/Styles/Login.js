import {
    StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal:50,
        paddingVertical:30
    },
    topTab:{
        flexDirection:'row',
        alignItems:'center',
        paddingLeft:'5%'
    },
    topTabImg1:{
        width:110,
    },
    topTabImg2:{
        marginRight:5,
    },
    topCashierBox:{
        flexDirection:'row',
        alignItems:'center',
        marginLeft:30,
        paddingTop:8
    },
    wrapper:{
        flex:1,
        marginHorizontal:'5%'
    },
    itemMenu:{
        width:'25%',
        height:'40%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    menuBox:{
        flex:1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignContent:'center',
    },
    textInput:{
        borderColor: 'black',
        borderWidth: 1,
        fontSize: 26,
        paddingHorizontal: 5,
        paddingVertical: 10
    }
});

export default styles;
