/**
 * Created by zhoucaiguang on 2016/12/23.
 */

import React, {Component} from 'react';
// import Body from './Body';
import GoodsList from './GoodsList';
import Header from './Header'
import Footer from './Footer'
import Img from './Img'
import '../styles/Home.css';
// import '../styles/Body.css';
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
                <Header/>
                <div className="Home-container">
                        <div className="content">
                            <div className="content-box">
                                <div  className="logo">
                                    {/*<img src="/src/images/temp-fansPhoto.png" />*/}
                                    <img src={require('../images/temp-fansPhoto.png')}/>

                                </div>
                                <div className="nameBox">
                                    <div className="name">

                                        <div className="nameText">  我是是哈哈哈222</div>
                                        <div className="vIcon"></div>
                                        <div className="vipIcon"></div>
                                    </div>

                                    <div className="times">
                                        2016-12-12 12:12:12
                                    </div>
                                </div>
                            </div>
                            <div className="postsBox">
                                <div className="postsBox-title">明年夏天，去一个有风的地方。大家帮忙选中一些看看那个比较合适。</div>
                                <div className="postsBox-text">
                                    明年夏天，去一个有风的地方。大家帮忙选中一些看看那个比较合适。明年夏天，去一个有风的地方。大家帮忙选中一些看看那个比较合适。
                                    明年夏天，去一个有风的地方。大家帮忙选中一些看看那个比较合适。明年夏天，去一个有风的地方。大家帮忙选中一些看看那个比较合适。
                                    明年夏天，去一个有风的地方。大家帮忙选中一些看看那个比较合适。明年夏天，去一个有风的地方。大家帮忙选中一些看看那个比较合适。
                                    明年夏天，去一个有风的地方。大家帮忙选中一些看看那个比较合适。明年夏天，去一个有风的地方。大家帮忙选中一些看看那个比较合适。
                                    明年夏天，去一个有风的地方。大家帮忙选中一些看看那个比较合适。明年夏天，去一个有风的地方。大家帮忙选中一些看看那个比较合适。

                                </div>
                                <div className="postsBox-imgBody">
                                    <div className="imgBox imgP5">
                                        <img src={require('../images/temp-fansPhoto.png')}/>
                                    </div>
                                    <div className="imgBox imgP5">
                                        <img src={require('../images/temp-fansPhoto.png')}/>
                                    </div>
                                    <div className="imgBox imgP5">
                                        <img src={require('../images/temp-fansPhoto.png')}/>
                                    </div>

                                </div>
                            </div>

                            <div className="postFooter">
                                <div className="commentIcon"></div><div className="text">123123</div>
                            </div>


                        </div>


                        <div className="content">
                            <div className="content-box">
                                <div  className="logo">
                                    <img src={require('../images/temp-fansPhoto.png')} />
                                </div>
                                <div className="nameBox">
                                    <div className="name">

                                        <div className="nameText">  我是是哈哈哈222</div>
                                        <div className="vIcon"></div>
                                        <div className="vipIcon"></div>
                                    </div>

                                    <div className="times">
                                        2016-12-12 12:12:12
                                    </div>
                                </div>

                            </div>
                            <div className="postsBox">
                                <div className="postsBox-title">明年夏天，去一个有风的地方。大家帮忙选中一些看看那个比较合适。</div>
                                <div className="postsBox-text">
                                    明年夏天，去一个有风的地方。大家帮忙选中一些看看那个比较合适。明年夏天，去一个有风的地方。大家帮忙选中一些看看那个比较合适。
                                    明年夏天，去一个有风的地方。大家帮忙选中一些看看那个比较合适。明年夏天，去一个有风的地方。大家帮忙选中一些看看那个比较合适。
                                    明年夏天，去一个有风的地方。大家帮忙选中一些看看那个比较合适。明年夏天，去一个有风的地方。大家帮忙选中一些看看那个比较合适。
                                    明年夏天，去一个有风的地方。大家帮忙选中一些看看那个比较合适。明年夏天，去一个有风的地方。大家帮忙选中一些看看那个比较合适。
                                    明年夏天，去一个有风的地方。大家帮忙选中一些看看那个比较合适。明年夏天，去一个有风的地方。大家帮忙选中一些看看那个比较合适。

                                </div>
                                <div className="postsBox-imgBody">
                                    <div className="imgBox">

                                        <img src={require('../images/temp-fansPhoto.png')}/>
                                    </div>
                                    <div className="vsBox"><img src={require('../images/vs.png')}/></div>
                                    <div className="imgBox">
                                        <div className="hideBox"></div>
                                        <img src={require('../images/temp-swiper0.jpg')}/>
                                    </div>

                                </div>
                            </div>

                            <div className="postFooter">
                                <div className="commentIcon"></div><div className="text">123123</div>
                            </div>


                        </div>


                        <div className="content">
                            <div className="content-box">
                                <div  className="logo">
                                    <img src={require('../images/temp-fansPhoto.png')} />
                                </div>
                                <div className="nameBox">
                                    <div className="name">

                                        <div className="nameText">  我是是哈哈哈222</div>
                                        <div className="vIcon"></div>
                                        <div className="vipIcon"></div>
                                    </div>

                                    <div className="times">
                                        2016-12-12 12:12:12
                                    </div>
                                </div>

                            </div>
                            <div className="postsBox">
                                <div className="postsBox-title">明年夏天，去一个有风的地方。大家帮忙选中一些看看那个比较合适。</div>
                                <div className="postsBox-text">
                                    明年夏天，去一个有风的地方。大家帮忙选中一些看看那个比较合适。明年夏天，去一个有风的地方。大家帮忙选中一些看看那个比较合适。
                                    明年夏天，去一个有风的地方。大家帮忙选中一些看看那个比较合适。明年夏天，去一个有风的地方。大家帮忙选中一些看看那个比较合适。
                                    明年夏天，去一个有风的地方。大家帮忙选中一些看看那个比较合适。明年夏天，去一个有风的地方。大家帮忙选中一些看看那个比较合适。
                                    明年夏天，去一个有风的地方。大家帮忙选中一些看看那个比较合适。明年夏天，去一个有风的地方。大家帮忙选中一些看看那个比较合适。
                                    明年夏天，去一个有风的地方。大家帮忙选中一些看看那个比较合适。明年夏天，去一个有风的地方。大家帮忙选中一些看看那个比较合适。

                                </div>
                                <div className="postsBox-imgBody">


                                    <div className="imgBox">
                                        <div className="handIcon"></div>
                                        <img src={require('../images/temp-fansPhoto.png')}/>
                                    </div>
                                    <div className="vsBox"><img src={require('../images/vs.png')}/></div>
                                    <div className="imgBox">
                                        <div className="handIcon"></div>
                                        <img src={require('../images/temp-fansPhoto.png')}/>
                                    </div>

                                </div>
                            </div>

                            <div className="postFooter">
                                <div className="commentIcon"></div><div className="text">123123</div>
                            </div>


                        </div>




                        <div className="content">
                            <div className="content-box">
                                <div  className="logo">
                                    <img src={require('../images/temp-fansPhoto.png')} />
                                </div>
                                <div className="nameBox">
                                    <div className="name">

                                        <div className="nameText">  明年夏天，去一个有风的地方。大家帮忙选中一些看看 wqewq</div>
                                        <div className="vIcon"></div>
                                        <div className="vipIcon"></div>
                                    </div>

                                    <div className="times">
                                        2016-12-12 12:12:12
                                    </div>
                                </div>
                            </div>
                            <div className="postsBox">
                                <div className="postsBox-title">明年夏天，去一个有风的地方。大家帮忙选中一些看看那个比较合适。</div>
                                <div className="postsBox-text">
                                    明年夏天，去一个有风的地方。大家帮忙选中一些看看那个比较合适。明年夏天，去一个有风的地方。大家帮忙选中一些看看那个比较合适。
                                    明年夏天，去一个有风的地方。大家帮忙选中一些看看那个比较合适。明年夏天，去一个有风的地方。大家帮忙选中一些看看那个比较合适。
                                    明年夏天，去一个有风的地方。大家帮忙选中一些看看那个比较合适。明年夏天，去一个有风的地方。大家帮忙选中一些看看那个比较合适。
                                    明年夏天，去一个有风的地方。大家帮忙选中一些看看那个比较合适。明年夏天，去一个有风的地方。大家帮忙选中一些看看那个比较合适。
                                    明年夏天，去一个有风的地方。大家帮忙选中一些看看那个比较合适。明年夏天，去一个有风的地方。大家帮忙选中一些看看那个比较合适。

                                </div>
                                <div className="postsBox-imgBody">


                                    <div className="imgBox">
                                        <img src={require('../images/temp-fansPhoto.png')}/>
                                    </div>
                                    <div className="imgBox">
                                        <img src={require('../images/temp-fansPhoto.png')}/>
                                    </div>

                                </div>
                            </div>

                            <div className="postFooter">
                                <div className="commentIcon"></div><div className="text">123123</div>
                            </div>


                        </div>


                        <div className="footer">
                            <div className="postIcon"></div>
                        </div>
                    </div>
                    
                
                <Footer/>
            </div>
        );
    }


}

export default Home;