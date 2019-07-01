
export default  (state = {}, action) => {
    switch (action.type) {
        //点击提交
        case 'LOGIN':
            return {
                ...state,
                ...action
            };
        default:
            return state
    }
}
