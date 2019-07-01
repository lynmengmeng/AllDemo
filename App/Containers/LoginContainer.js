import {connect} from 'react-redux';
import Login from '../Views/Login/index';
import Actions from '../Actions';
import Net from '../Service';
const mapStateToProps = (store, ownProps) => {
    return {
        username:store.keyboardReducer.username,
        pwd: store.keyboardReducer.pwd
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        async login(user, pwd){
            dispatch(Actions.Login(user, pwd));
            let res =await Net.Login();
            console.log(res)
            this.props.navigation.navigate('Home');
        },
        isShowKeyboard(inputName){
            dispatch(Actions.isShowKeyboard(true, inputName))
        }
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login)
