/**
 * Created by zhoucaiguang on 2016/12/23.
 */

import React, { Component } from 'react';
import '../styles/Footer.css'
import { TabBar } from 'antd-mobile';
// import {  Link } from 'react-router'
import NavLink from  './NavLink'
import { Link } from 'react-router'

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

            <TabBar
                unselectedTintColor="#949494"
                tintColor="#33A3F4"
                barTintColor="white"
            >
                <TabBar.Item
                    title="生活"
                    key="生活"
                    icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/UNQhIatjpNZHjVf.png' }}
                    selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/HLkBvJOKnmOfBPO.png' }}
                    selected={this.state.selectedTab === 'blueTab'}
                    badge={1}
                    onPress={() => {
                        this.setState({
                            selectedTab: 'blueTab',
                        });
                         this.props.router.router.push('/');
                    }}
                    data-seed="logId"
                >
                    {this.renderContent('生活')}
                </TabBar.Item>
                <TabBar.Item
                    icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/UNQhIatjpNZHjVf.png' }}
                    selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/HLkBvJOKnmOfBPO.png' }}
                    title="口碑"
                    key="口碑"
                    selected={this.state.selectedTab === 'redTab'}
                    onPress={() => {
                        this.setState({
                            selectedTab: 'redTab',
                        });
                        this.props.router.router.push('/myOrder');

                    }}
                    data-seed="logId1"
                >
                    {this.renderContent('口碑')}
                </TabBar.Item>
                <TabBar.Item
                    icon={
                        <div style={{
                            width: '0.44rem',
                            height: '0.44rem',
                            background: 'url(https://zos.alipayobjects.com/rmsportal/WdEuTLJOVzeABZlKYLmJ.png) center center /  0.44rem 0.35rem no-repeat' }}
                        />
                    }
                    selectedIcon={
                        <div style={{
                            width: '0.44rem',
                            height: '0.44rem',
                            background: 'url(https://zos.alipayobjects.com/rmsportal/sRkvMgIGXERtyRVyAsXP.png) center center /  0.44rem 0.35rem no-repeat' }}
                        />
                    }
                    title="朋友"
                    key="朋友"
                    selected={this.state.selectedTab === 'greenTab'}
                    onPress={() => {
                        this.setState({
                            selectedTab: 'greenTab',
                        });
                        this.props.router.router.push('/find');
                    }}
                >
                    {this.renderContent('朋友')}
                </TabBar.Item>
                <TabBar.Item
                    icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/cKhfyLTszUeFARPgfokz.png' }}
                    selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/bqUXyjiOyKrXRfiIZVsZ.png' }}
                    title="我的"
                    key="我的"
                    selected={this.state.selectedTab === 'yellowTab'}
                    onPress={() => {
                        this.setState({
                            selectedTab: 'yellowTab',
                        });
                        this.props.router.router.push('/my');
                    }}
                >
                    {this.renderContent('我的')}
                </TabBar.Item>
            </TabBar>

            /*
           <div className="am-tab-bar">
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