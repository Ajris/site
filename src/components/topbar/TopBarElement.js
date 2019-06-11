import React from "react";

import {Link as RouterLink} from "react-router-dom";

const Link = require('react-scroll/modules').Link;

class TopBarElement extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.name
        }
    }

    render() {
        return (
            <Link className="nav-link " to={this.state.name} style={{cursor: 'pointer'}} spy={true}
                  smooth={true} duration={500} offset={-100}>
                <RouterLink className="topbarElement" to="/">{this.state.name}</RouterLink>
            </Link>
        )
    }
}

export default TopBarElement;