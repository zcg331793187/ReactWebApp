/**
 * Created by zhoucaiguang on 2016/12/23.
 */

import React, {Component} from 'react';
import '../styles/Body.css';
import {Carousel} from 'antd-mobile';
import BankModel from './components/BankModel'
// const alert = Modal.alert;

class Find extends Component {

    constructor() {
        super();
        console.log('constructor');
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


            <Carousel className="container" dots={false}
                      dragging={false} autoplay={false} vertical={true}>
                <BankModel bankId={17} bankLabel={'中国农业银行'}/>
            </Carousel>
            </div>
        );
    }


}

export default Find;