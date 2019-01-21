import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { toggleNavMenuOpen, toggleNavMenuClose } from '../../actions/navToggleActions.js';
import { toggleSearchBarOpen, toggleSearchBarClose } from '../../actions/toggleSearchBarActions.js';
import StarParticles from '../Particles/StarParticles';
import Title from '../Title/Title'
import MainNav from '../MainNav/MainNav'
import './home.scss';

class Home extends Component {

    render() {

        const navContent = `
        <a href="#home"><li>Home</li></a>
        `;
        return (
            <div className="homeContainer">
                <StarParticles />
                <MainNav content={navContent} handleNavMenuToggle={{ toggleOff: this.props.toggleNavMenuClose, toggleOn: this.props.toggleNavMenuOpen, state: this.props.navToggle }} handleSearchBarToggle={{ toggleOff: this.props.toggleSearchBarClose, toggleOn: this.props.toggleSearchBarOpen, state: this.props.toggleSearchBar }} />
                <Title />
            </div>
        )
    }
}

// Check propTypes for Redux
toggleNavMenuOpen.propTypes = {
    toggleNavMenu: PropTypes.func.isRequired,
    toggle: PropTypes.bool.isRequired
}

toggleNavMenuClose.propTypes = {
    toggleNavMenu: PropTypes.func.isRequired,
    toggle: PropTypes.bool.isRequired
}

toggleSearchBarOpen.propTypes = {
    toggleSearchBar: PropTypes.func.isRequired,
    payload: PropTypes.bool.isRequired
}

toggleSearchBarClose.propTypes = {
    toggleSearchBar: PropTypes.func.isRequired,
    payload: PropTypes.bool.isRequired
}

// Map state to props
const mapStateToProps = state => {
    return { navToggle: state.navToggle.toggleNavMenu, toggleSearchBar: state.searchBarToggle.toggleSearchBar }
};

export default connect(mapStateToProps, { toggleNavMenuOpen, toggleNavMenuClose, toggleSearchBarOpen, toggleSearchBarClose })(Home);