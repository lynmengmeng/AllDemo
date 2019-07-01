export default {
    isShowLoading(isShowLoading,loadingText) {
        return {
            type: 'LOADING',
            isShowLoading,
            loadingText,
        }
    },
    Login(user, pwd){
        return{
            type:'LOGIN',
            user,
            pwd
        }
    },
    isShowKeyboard(bool, inputName){
        return{
            type: 'isShowKeyboard',
            bool,
            inputName
        }
    },
    setAllKeyBoard(keyNumber){
        return{
            type: 'setAllKeyBoard',
            keyNumber
        }
    }
}
