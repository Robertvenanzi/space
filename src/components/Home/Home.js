import React, { Component } from 'react';
import StarParticles from '../Particles/StarParticles';
import Title from '../Title/Title'
import './home.sass';

class Home extends Component {
    render() {
        return (
            <div className="homeContainer">
                <StarParticles />
                <Title />
            </div>
        )
    }
}

export default Home;