import React from 'react';
import PropTypes from 'prop-types';
import MenuItem from "./MenuItem";
import Login from "./Login"



export default class Menu extends React.Component {
    render() {
        const items = this.props.items.map((item, index)=>{
            return <MenuItem key ={index} href ={item.href}>
               {item.title} 
            </MenuItem> 
        })
        return <div>
            <h1>{this.props.titleMenu}</h1>
            <ul>
                {items}
            </ul>
                <Login />
            </div>
    }
}

MenuItem.propTypes = {
    items: PropTypes.string.isRequired,
    titleMenu: PropTypes.string.isRequired,
}