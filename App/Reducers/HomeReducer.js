
export default (state = {}, action) => {
    switch (action.type) {
        //点击提交
        case 'FUNCONE':
            return {
                ...state,
                ...action
            };
        default:
            return state
    }
}
