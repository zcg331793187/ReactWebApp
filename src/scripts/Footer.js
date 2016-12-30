/**
 * Created by zhoucaiguang on 2016/12/23.
 */

import React, { Component } from 'react';
import '../styles/Footer.css'
// import { TabBar } from 'antd-mobile';
// import {  Link } from 'react-router'
import NavLink from  './NavLink'
// import { Link } from 'react-router'

class Footer extends Component {

    constructor(props) {
        super(props);

        // console.log(this.props.router);

        // this.props.router.router.push('/My');
        // this.props.router.router.push('/My');
        this.state = {selectedTab: 'blueTab'};

    }


    renderContent(){



    }

    render() {
        return (

            <div className="Footer-container">
                <div className="content">
                    <div className="item"><div className="homeIcon"></div><div className="text"><NavLink to="/" onlyActiveOnIndex>首页</NavLink></div></div>
                    <div className="item"><div className="homeIcon"></div><div className="text"><NavLink to="/MyOrder">分类</NavLink></div></div>
                    <div className="item"><div className="homeIcon"></div><div className="text"><NavLink to="/Find">动态</NavLink></div></div>
                    <div className="item"><div className="homeIcon"></div><div className="text"> <NavLink to="/My">我的</NavLink></div></div>
                </div>


            </div>


            /*
           <div>
               <NavLink to="/" onlyActiveOnIndex>Home</NavLink>
               <NavLink to="/My">My</NavLink>
               <NavLink to="/MyOrder">MyOrder</NavLink>
               <NavLink to="/Find">Find</NavLink>
           </div>
*/

    );
    }
}
export default Footer;