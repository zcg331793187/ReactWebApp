/**
 * Created by zhoucaiguang on 2016/12/25.
 */
// modules/NavLink.js
import React,{Component} from 'react'
import { Link } from 'react-router'


class NavLink extends Component {
    render() {
        return <a className="button"><Link {...this.props}/></a>
    }
}

export default NavLink;