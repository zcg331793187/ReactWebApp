/**
 * Created by zhoucaiguang on 2016/12/23.
 */

import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {

    TestClick(item){

        console.log(item);
    }

    render() {
        return (
            <div className="Footer">
                <div  className="button">首页</div>
                <div  className="button">订单</div>
                <div  className="button">发现</div>
                <div  className="button">我的</div>
                <div  className="button">你的</div>
            </div>
        );
    }
}

export default Footer;