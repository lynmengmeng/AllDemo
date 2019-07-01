import xml2js from 'react-native-xml2js'
import Actions from '../Actions';
import Store from '../Store';

var parser = new xml2js.Parser();
const reqUrl = 'http://172.17.13.107:3000/RFSystemManagement.asmx';

export const Net = (reqData, loadingText = 'Loading') => {
    let data = `<soap12:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap12="http://www.w3.org/2003/05/soap-envelope">
                  <soap12:Body>
                      <LoginSystem xmlns="CALS.RF.Service">
                          <stu>
                              <strUsername>admin</strUsername>
                              <strPassword>1</strPassword>
                              <blForce>false</blForce>
                          </stu>
                          <strSessionID>string</strSessionID>
                          <strMsgInfo>string</strMsgInfo>
                      </LoginSystem>
                  </soap12:Body>
              </soap12:Envelope>`;
    Store.dispatch(Actions.isShowLoading(true,loadingText))
    return (
        fetch(reqUrl, {
            method: 'POST',
            headers: {'Content-Type': 'text/xml'},
            body: data
        }).then(response => {
            var newTimes = (new Date()).getTime();
            console.log('开始获取' + newTimes)
            console.log(response)
            if (response.ok && response.status == 200) {
                Store.dispatch(Actions.isShowLoading(false))
                parser.parseString(response._bodyText, function (err, result) {
                    let oldTimes = (new Date()).getTime();
                    console.log(oldTimes - newTimes)
                    console.log(result)
                });
                // response.json();
                return response._bodyText
            }
        }).then(resData => {
            Store.dispatch(Actions.isShowLoading(false))
            console.log(resData)
            return resData
        }).catch(err => {
            Store.dispatch(Actions.isShowLoading(false))
            console.log(err)
        })
    )
}
