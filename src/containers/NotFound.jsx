import React from 'react';
import Home from '../containers/Home';
import logo from '../assets/static/logo-platzi-video-BW2.png';
import '../assets/styles/components/NotFound.scss';

const NotFound = () => (
    <section className="bg-purple">
        <div className="stars">
            <div className="custom-navbar">
            <div className="brand-logo">
                <img src={logo} width="250px" />
            </div>
            </div>
            <div className="central-body">
            <img className="image-404" src="http://salehriaz.com/404Page/img/404.svg" width="300px" />
                <a href={Home} className="btn-go-home">IR A INICIO</a>
            </div>
            <div className="objects">
            <img className="object_rocket" src="http://salehriaz.com/404Page/img/rocket.svg" width="40px" />
            <div className="earth-moon">
                <img className="object_earth" src="http://salehriaz.com/404Page/img/earth.svg" width="100px" />
                <img className="object_moon" src="http://salehriaz.com/404Page/img/moon.svg" width="80px" />
            </div>
            <div className="box_astronaut">
                <img className="object_astronaut" src="http://salehriaz.com/404Page/img/astronaut.svg" width="140px" />
            </div>
            </div>
            <div className="glowing_stars">
            <div className="star" />
            <div className="star" />
            <div className="star" />
            <div className="star" />
            <div className="star" />
            </div>
        </div>
    </section>

);

export default NotFound;