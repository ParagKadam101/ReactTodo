import React, {Component} from "react"
import {Link} from 'react-router-dom'

class Header extends Component {
    render() {
        return(
            <div style={this.mainHeaderStyle}>
                <h1>TodoList</h1>
                <Link to="/">Home</Link> | <Link to="/about">About</Link>
            </div>
        );
    }

    mainHeaderStyle =  {
        color: '#fff',
        backgroundColor: "#000",
        textAlign: "center",
        padding: "10px"
    }
    
}

export default Header;
