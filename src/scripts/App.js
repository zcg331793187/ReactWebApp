import React, {Component} from 'react';
import Header from './Header'
import Footer from './Footer'
// import Route from  './Routes'
import {TabBar} from 'antd-mobile';
import {hashHistory} from 'react-router'

class App extends Component {

    constructor(props) {
        super(props);

        console.log(props);

    }



    render() {
        return (
            <div>
                <Header router={this.props} />
                {this.props.children}
                <Footer router={this.props}/>
            </div>
        )
    }
}

export default App;
