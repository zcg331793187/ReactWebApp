/**
 * Created by zhoucaiguang on 2016/12/23.
 */

import React, {Component} from 'react';
import { Link } from 'react-router'

// import NavLink from './NavLink'
class GoodsList extends Component {

    constructor(props) {
        // console.log(props);
        super(props);
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
                    <Link to="/goodsItem/1">苹果1</Link>
                    <Link to="/goodsItem/2">苹果2</Link>
                    <Link to="/goodsItem/3">苹果3</Link>
                    <Link to="/goodsItem/4">苹果4</Link>
            </div>
        );
    }


}

export default GoodsList;