const defaultState = {
    isShowLoading: false,
    loadingText: 'loading'
}


export default (state = defaultState, action) => {
    const {isShowLoading, loadingText} = action;
    switch (action.type) {
        //点击提交
        case 'LOADING':
            return {
                ...state,
                isShowLoading,
                loadingText
            };
        default:
            return state
    }
}
