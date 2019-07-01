import {connect} from 'react-redux';
import Keyboard from '../Common/Keyboard';
import Actions from '../Actions'

const mapStateToProps = (store, ownProps) => {
    console.log(store)
    return {
        isShowKeyboard:store.keyboardReducer.isShowKeyboard,
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        hideKeyboard(){
            dispatch(Actions.isShowKeyboard(false))
        },
        setKeyBoard(key,index){
            console.log(key)
            switch (key.mainText){
                case '清空':{

                }
                    break;
                case '确定':{
                    dispatch(Actions.isShowKeyboard(false, ''))
                }
                    break;
                case '删除':{

                }
                    break;
                default:{
                    dispatch(Actions.setAllKeyBoard(key.mainText))
                }
                    break;
            }
        }
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Keyboard)
