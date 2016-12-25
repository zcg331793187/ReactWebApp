/**
 * Created by zhoucaiguang on 2016/12/23.
 */
import React, { Component } from 'react';
import { NavBar } from 'antd-mobile';
import request from './utils/request'

class Header extends Component {

    constructor(props){
        super(props);
        // this.props.router

      let isRoot  =  this.checkIsRootPage(this.props.router.location.pathname);
        this.goBack = this.goBack.bind(this);
        this.props = props;
        console.log('Header',this.props);
        this.state = {isReturn: isRoot,returnName:""};

        // console.log('Header',this.props.router.location.pathname);
        // console.log('Header',this.props.router.goBack());
        // this.isReturn();


    }


    checkIsRootPage(path){
        let status = null;
        let rootPage = [
            '/',
            '/myOrder',
            '/my',
            '/find',
        ];

        if(rootPage.indexOf(path)>-1){
            status = true;
        }else{
            status = 'left';
        }


        return status;
    }
    goBack(){

        // console.log(this.props);
        this.props.router.router.goBack();

    }
    render() {
        return (
            <div>
                <NavBar
                    mode="dark"
                    iconName={this.state.isReturn}
                    leftContent={this.state.returnName}
                    onLeftClick={this.goBack}
                >首页</NavBar>
            </div>
        );
    }
}

export default Header;