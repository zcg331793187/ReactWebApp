import React, { Component } from 'react';
import Home from './Home'
import App from './App'
import My from './My'
// import Footer from './Footer'
import MyOrder from './MyOrder'
import Find from './Find'
import GoodsList from './GoodsList'
import GoodsItem from './GoodsItem'
import { Router, Route, browserHistory, IndexRoute ,IndexRedirect} from 'react-router'

class Routers extends Component {
  render() {
    return (
        <Router history={browserHistory}>

            <Route path="/" component={App}>
                <IndexRoute component={Home}/>
                <Route path="/myOrder" component={MyOrder} />
                <Route path="/my" component={My}/>
                <Route path="/find" component={Find}/>
                <Route path="/goodsItem/:goodsId" component={GoodsItem}/>
            </Route>
        </Router>
    );
  }
}

export default Routers;
