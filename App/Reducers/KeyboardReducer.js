const defaultState = {
    isShowKeyboard: false,
    keyNumber: '',
    username: '',
    pwd: '',
    inputName: ''
}

const keyboardReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'isShowKeyboard': {
            return {
                ...state,
                isShowKeyboard: action.bool,
                inputName: action.inputName
            }
        }
            break;

        case 'setAllKeyBoard': {
            return {
                ...state,
                [state.inputName]: state[state.inputName] + action.keyNumber
            }
        }
            break;
        default:
            return state;
    }
}

export default keyboardReducer;
