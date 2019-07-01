import {connect} from 'react-redux';
import Home from '../Views/Home/index';
import Actions from '../Actions'
const mapStateToProps = (store, ownProps) => {
    const loginData = store.loginReducer
    return {...loginData}
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        async login(user, pwd){
            dispatch(Actions.Login(user, pwd));
            this.props.navigation.navigate('Index');
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home)
