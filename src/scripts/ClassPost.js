/**
 * Created by zhoucaiguang on 2016/12/23.
 */

import React, {Component} from 'react';
import Header from './Header'
import Footer from './Footer'
import   '../styles/ClassPost.css'


class ClassPost extends Component {

    constructor(props) {
        super(props);


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
                <Header/>
                <div className="ClassPost-container">



                    <div className="ranking">
                        <div className="ranking-header">
                            <div className="box" >综合榜</div>
                            <div className="box" >飙升榜</div>
                            <div className="box">热搜榜</div>
                        </div>
                        <div className="ranking-content">
                            <div className="ranking-content-box">

                                <div className="text">
                                    <div className="top1Icon">
                                        <div className="top1Number">1</div>
                                    </div>
                                    <div className="top2Icon"> <div className="top2Number">1</div></div>
                                    <div className="top3Icon"> <div className="top3Number">1</div></div>
                                    <span  className="number">1</span>
                                    现在很多商城都是直接购买他们也没有跳转</div>
                            </div>

                        </div>


                    </div>


                    <div className="content">
                        <div className="content-box">
                            <div  className="logo">
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
                                <div className="imgBox">
                                    <div className="hideBox"></div>
                                     <img src={require('../images/temp-fansPhoto.png')}/>
                                </div>
                                <div className="vsBox"><img src={require('../images/vs.png')}/></div>
                                <div className="imgBox">

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
                                <img src={require('../images/temp-fansPhoto.png')}/>
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

                </div>


                <Footer/>
            </div>
        );
    }


}

export default ClassPost;