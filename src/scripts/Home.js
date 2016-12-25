/**
 * Created by zhoucaiguang on 2016/12/23.
 */

import React, {Component} from 'react';
// import Body from './Body';
import GoodsList from './GoodsList';
// import Footer from './Footer'
import '../styles/Body.css';
// import {Carousel} from 'antd-mobile';
// import BankModel from './components/BankModel'
// const alert = Modal.alert;

class Home extends Component {

    constructor(props) {
        // console.log(props);
        super(props);
        console.log('Home',this.props.location.pathname);

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


        // console.log('init');
    }


    render() {


        // console.log(this.state.dataList);
        return (
            <div>
                <GoodsList/>
            </div>
        );
    }


}

export default Home;