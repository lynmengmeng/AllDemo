import React, {Component} from 'react';
import {Provider} from 'react-redux';
import Store from './Store';
import {Button,Alert } from 'react-native';
import {createStackNavigator, createAppContainer} from "react-navigation";
import codePush from "react-native-code-push";
import Login from './Containers/LoginContainer';
import Home from './Containers/HomeContainer';
import Loading from './Containers/LoadingContainer';
import Keyboard from './Containers/KeyboardContainer'

const AppNavigator = createStackNavigator({
    Login: Login,
    Home: Home,
    Loading: Loading,
    Keyboard: Keyboard
})
const AppContainer = createAppContainer(AppNavigator);

let codePushOptions = {
    //设置检查更新的频率
    //ON_APP_RESUME APP恢复到前台的时候
    //ON_APP_START APP开启的时候
    //MANUAL 手动检查
    checkFrequency: codePush.CheckFrequency.ON_APP_RESUME
};
let deploymentKey = 'J1l2ipE17Qvpwf7KgHOFBO5VCxq801a9df87-b816-49ec-a4e6-b4095292e1cf';
class App extends Component {
    //如果有更新的提示
    syncImmediate() {
        console.log(codePush.checkForUpdate)
        codePush.disallowRestart();//禁止重启
        codePush.checkForUpdate(deploymentKey).then((update) => {
            console.log(update)
            if (!update) {
                Alert.alert("提示", "已是最新版本--", [
                    {
                        text: "Ok", onPress: () => {
                            console.log("点了OK");
                        }
                    }
                ]);
            } else {
                const pushOptions = {
                    deploymentKey,
                    updateDialog: {
                        title: '更新提示', // 要显示的更新通知的标题
                        appendReleaseDescription: true, // 是否显示更新description，默认为false
                        descriptionPrefix: '更新内容：', // 更新说明的前缀

                        optionalIgnoreButtonLabel: '稍后', // 非强制更新时，取消按钮文字
                        optionalInstallButtonLabel: '后台更新', // 非强制更新时，确认文字
                        optionalUpdateMessage: '有新版本了，是否更新？', // 非强制更新时，更新通知

                        mandatoryContinueButtonLabel: '立即更新', // 强制更新的按钮文字
                        mandatoryUpdateMessage: '', // 强制更新时，更新通知
                    },
                    // 启动模式三种：ON_NEXT_RESUME、ON_NEXT_RESTART、IMMEDIATE
                    installMode: codePush.InstallMode.IMMEDIATE
                };
                codePush.sync(pushOptions, (status) => {
                    console.log(status)
                    switch (status) {
                        //检查更新
                        case codePush.SyncStatus.CHECKING_FOR_UPDATE:
                            console.log('5 Checking for update')
                            break;
                        //下载安装包
                        case codePush.SyncStatus.DOWNLOADING_PACKAGE:
                            console.log('7 Downloading package')
                            break;
                        //等待用户操作
                        case codePush.SyncStatus.AWAITING_USER_ACTION:
                            console.log('6 Awaiting user action')
                            break;
                        //安装更新
                        case codePush.SyncStatus.INSTALLING_UPDATE:
                            console.log('8 Installing update')
                            break;
                        //最新的应用程序
                        case codePush.SyncStatus.UP_TO_DATE:
                            console.log('0 App up to date.')
                            break;
                        //用户取消更新
                        case codePush.SyncStatus.UPDATE_IGNORED:
                            console.log('2 Update cancelled by user')
                            break;
                        //更新已安装，并将在重新启动时应用。
                        case codePush.SyncStatus.UPDATE_INSTALLED:
                            console.log('1 Update installed and will be applied on restart.')
                            codePush.allowRestart();
                            alert('下载更新完成');
                            break;
                        //发生未知错误
                        case codePush.SyncStatus.UNKNOWN_ERROR:
                            console.log('3 An unknown error occurred')
                            break;
                    }
                },
                ({receivedBytes, totalBytes}) => {
                    this.setState({
                        progress: parseInt(receivedBytes * 100 / totalBytes)
                    })
                });
            }
        })
    }

    componentWillMount() {
        codePush.disallowRestart();//禁止重启
        this.syncImmediate(); //开始检查更新
    }

    componentDidMount() {
        codePush.allowRestart();//在加载完了，允许重启
    }

    render() {
        return (
            <Provider store={Store}>
                <AppContainer/>
                <Loading/>
                <Keyboard/>
                <Button title={'button'} onPress={() => {
                    this.syncImmediate(); //开始检查更新
                }}/>
                <Button title={'重启'} onPress={() => {
                    codePush.allowRestart();
                }}/>
            </Provider>
        );
    }
}

App = codePush(codePushOptions)(App)

export default App
