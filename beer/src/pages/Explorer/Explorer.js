import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './explorer-styles.scss';
import Button from '../../components/Button/Button'
import BeerList from '../../components/BeerList/BeerList'
import FormInput from '../../components/FormInput/FormInput'
import { showBeerDetails } from '../../redux/Beers/beer.actions'
import axios from 'axios'
import { FaSearch } from 'react-icons/fa'
import { ImCross } from 'react-icons/im'
import { IconContext } from "react-icons";



function useFormFields(initialValues) {
    const [formFields, setFormFields] = useState(initialValues);
    const createChangeHandler = (key) => (e) => {
        const { value } = e.target;
        setFormFields((prev) => ({ ...prev, [key]: value }));
    };
    return { formFields, createChangeHandler };
}

const Explorer = () => {
    const beerDetails = useSelector(state => state.beers.beerDetails);
    const dispatch = useDispatch();
    const [beers, setBeers] = useState([]);
    const [isLeftContentVisible, setLeftContentVisible] = useState(false);
    const randomBeerQuery = new Object('https://api.punkapi.com/v2/beers/random');
    const initalQuery = 'https://api.punkapi.com/v2/beers?';
    const [query, setQuery] = useState(initalQuery);
    useEffect(() => {
        axios.get(query).then(result => {
            return setBeers(result.data)
        }).catch(error => {
            console.log(error);
            return setBeers({})
        });
    }, [query])
    const { formFields, createChangeHandler } = useFormFields({
        beer_name: "",
        yeast: "",
        hops: "",
        malt: "",
        food: "",
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        setQuery(initalQuery);
        Object.keys(formFields).forEach(key => {
            if (formFields[key].length > 1) {
                setQuery(prevValue =>
                    prevValue + '&' + key + '=' + formFields[key]
                )
            }
        })
        if (beerDetails.hasOwnProperty('name')) {
            dispatch(showBeerDetails({}));
        }
        setLeftContentVisible(false);
    };
    const showRandomBeer = () => {
        setQuery(randomBeerQuery);
        dispatch(showBeerDetails(beers[0]))
    }
    return (
        <section className="explorer">
            <IconContext.Provider value={{ className: 'searchIcon' }}>
                <FaSearch onClick={() => setLeftContentVisible(true)}></FaSearch>
            </IconContext.Provider>
            <div className={isLeftContentVisible ? 'leftContent showLeftContent' : 'leftContent'}>
                <form className="searcher" onSubmit={handleSubmit}>
                    <IconContext.Provider value={{ className: 'closeSearcherIcon' }}>
                        <ImCross onClick={() => setLeftContentVisible(false)}></ImCross>
                    </IconContext.Provider>
                    <FormInput label="Name" type="text" name="beer_name" handleChange={createChangeHandler('beer_name')}></FormInput>
                    <FormInput label="Yeast" type="text" name="yeast" handleChange={createChangeHandler('yeast')}></FormInput>
                    <FormInput label="Hops" type="text" name="hops" handleChange={createChangeHandler('hops')}></FormInput>
                    <FormInput label="Malt" type="text" name="malt" handleChange={createChangeHandler('malt')}></FormInput>
                    <FormInput label="Food" type="text" name="food" handleChange={createChangeHandler('food')}></FormInput>
                    <Button type="submit">Search</Button>
                </form>
                <Button type="button" onClick={showRandomBeer}>Random Beer</Button>
            </div>
            <div className="rightContent">
                <BeerList beers={beers}></BeerList>
            </div>
        </section >
    )
}

export default Explorer;

