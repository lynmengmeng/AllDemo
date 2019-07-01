import {connect} from 'react-redux';
import Loading from '../Common/Loading';
const mapStateToProps = (store) => {
    let loadingData = store.loadingReducer
    return {...loadingData}
}

export default connect(
    mapStateToProps
)(Loading)
