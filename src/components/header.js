import React, {Component} from 'react';
import Diamond from './diamond';

class Header extends Component {
    render(){
        return( 
            <svg viewBox="0 0 193 132" id={this.props.id}>
                <Diamond center={[48, 0]} width={96} height={132} fill="#AEAEAE" />
                <Diamond center={[97, 66]} width={96} height={132} fill="#D7D7D7" />
                <Diamond center={[146, 0]} width={96} height={132} fill="#AEAEAE" />
            </svg>
        )
    }
}

export default Header;