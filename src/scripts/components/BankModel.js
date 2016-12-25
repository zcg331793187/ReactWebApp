import React, {Component} from 'react';
import request from '../utils/request'
import {Picker, List} from 'antd-mobile';
// import district from '../data/district';
// import province from '../data/province-lite';

class BankModel extends Component {
    constructor(props) {
        super();

        this.props = props;
        console.log(props);
        // console.log(this.prot.bankName);

        this.Click = this.Click.bind(this);
        this.state = {dataList: [], props: props};

    }



    componentDidMount() {
        request('http://o2o.yao2099.com/Cjson/get_fenxiao_tixian_yinhang.php').then((data) => {

            // console.log(data);
            // console.log('users',data);
            this.setState({dataList: data.data});
            // let dataList=  this.state.dataList;
        });


    }

    handleBankData(data) {
        let _data = [];
        let obj = {};
         data.map((item) => {

                // console.log(item);
            obj.label = item.bankName;
            obj.value = item.bankName;
            _data.push(obj);
             obj = {};
            return null;
        });

         console.log(_data);


        // console.log(_data);

        return _data;

    }

    Click(evnt) {

        console.log('点击了：' + evnt[0]);
        let obj = {bankLabel: evnt[0]};
        this.setState(
            {
                props: obj
            }
        );
    }


    render() {
        let data = this.handleBankData(this.state.dataList);

        console.log(data);
        // console.log(district);
        const getFieldProps = this.state.props;

        console.log(getFieldProps);
        return (

            <div>
                <List style={{backgroundColor: 'red'}}>

                    <Picker title="请选择银行" dismissText="关闭" okText="确认" onChange={this.Click} data={data} cols={1}
                            className="forss"

                    >
                        <List.Item arrow="horizontal" >{getFieldProps.bankLabel}</List.Item>
                    </Picker>
                </List>
                设置默认值
            </div>
        )


    }

}

BankModel.propTypes = {
    bankLabel: React.PropTypes.string.isRequired,
}

export default BankModel;
