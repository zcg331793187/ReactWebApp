/**
 * Created by zhoucaiguang on 2016/12/23.
 */

import React, {Component} from 'react';
import '../styles/Body.css';
// import {Carousel} from 'antd-mobile';
// import BankModel from './components/BankModel'
// const alert = Modal.alert;

class MyOrder extends Component {

    constructor(props) {
        super(props);
        console.log('Home',this.props.route.path);

        // console.log('constructor');
        this.state = {dataList: []};
        this.init();
    }

    componentDidMount() {


    }

    test() {

        console.log('test');
    }


    init() {


        console.log('init');
    }


    render() {


        // console.log(this.state.dataList);
        return (
            <div>
                myOrder
            </div>
        );
    }


}

export default MyOrder;