import {
    StyleSheet,
    Dimensions
} from 'react-native';

let {height, width} = Dimensions.get('window');
let borderColor = '#000';

const styles = StyleSheet.create({
    container: {
        position:'absolute',
        height:300,
        width:300,
        left:20,
        top:260,
        backgroundColor:'#fff'
    },
    wrapper: {
        width:'25%',
    },
    wrapperMax:{
        width:'25%',
        height:'200%',
    },

    textWrapper: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRightWidth:.7,
        borderRightColor:borderColor,
        height:'100%',
        borderTopWidth:.7,
        borderTopColor:borderColor,
    },
    mainText: {
        fontSize: 30,
        color: '#000',
    },

    numberKeysWrapper: {
        width: '100%',
        borderLeftWidth:.7,
        borderLeftColor:borderColor,
        borderBottomWidth:.7,
        borderBottomColor:borderColor,
        height:'100%'
    },
});

export default styles;
