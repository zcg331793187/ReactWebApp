/**
 * Created by zhoucaiguang on 2016/12/23.
 */

import React, {Component} from 'react';


class GoodsItem extends Component {

    constructor(props) {
        // console.log(props);
        super(props);
        console.log('constructor');
        this.props = props;
        this.goBack = this.goBack.bind(this);
        this.state = {dataList: []};
        this.init();
    }

    componentDidMount() {


    }

    test() {

        console.log('test');
    }


    init() {


        console.log('GoodsItem');
        console.log(this.props);
    }

    goBack(){

        console.log(this.props);
        this.props.router.goBack();

    }


    render() {


        // console.log(this.state.dataList);
        return (
            <div>
                商品详情
                <button onClick={this.goBack}>返回</button>
            </div>
        );
    }


}

export default GoodsItem;