import React from 'react'
import './homepage-styles.scss';
import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button'
import beerImg from '../../assets/beerImg.jpg'


const Homepage = props => {
    return (
        <section className="homePage">
            <div className="leftContent">
                <header className="header">
                    <h1 className="header-h1">Find your perfect match!</h1>
                </header>
                <div className="about">
                    <h2 className="about-h2">Search between hundreds of beers</h2>
                    <ul className="aboutList">
                        <li className="aboutListItem">- Check their ingredients.</li>
                        <li className="aboutListItem">- See temperature of fermentation.</li>
                        <li className="aboutListItem">- Discover type of hops used.</li>
                        <li className="aboutListItem">- Recognize with which food they taste best.</li>
                    </ul>
                </div>
                <Link to="/explore">
                    <Button className="button exploreButton">
                        Start Exploring
                </Button>
                </Link>
            </div>
            <div className="rightContent">
                <img className="img" src={beerImg} alt="beer" />
            </div>
        </section>
    )
}

export default Homepage;

