/**
 * Created by zhoucaiguang on 2016/12/23.
 */

import React, {Component} from 'react';
// import '../styles/Body.css';
// import {Carousel} from 'antd-mobile';
// import BankModel from './components/BankModel'
// const alert = Modal.alert;

class My extends Component {

    constructor() {
        super();
        // console.log('constructor');
        console.log('My',this.props.route.path);
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
                my
            </div>
        );
    }


}

export default My;