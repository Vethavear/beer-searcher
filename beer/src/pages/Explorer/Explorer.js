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
    // eslint-disable-next-line
    // const randomBeerQuery = new Object('https://api.punkapi.com/v2/beers/random');
    const initalQuery = 'https://api.punkapi.com/v2/beers?';
    const dispatch = useDispatch();
    const beerDetails = useSelector(state => state.beers.beerDetails);
    const [beers, setBeers] = useState([]);
    const [randomBeerQuery, setRandomBeerQuery] = useState({});
    const [query, setQuery] = useState(initalQuery);
    const [isLeftContentVisible, setLeftContentVisible] = useState(false);

    useEffect(() => {
        axios.get(query).then(result => {

            return setBeers(result.data)
        })
            .catch(error => {
                console.log(error);
                return setBeers([])
            });
    }, [query])

    useEffect(() => {
            axios.get(randomBeerQuery).then(result => {
                return dispatch(showBeerDetails(result.data[0]))
            })
                .catch(error => {
                    console.log(error);
                    return;
                });

    }, [randomBeerQuery, dispatch])
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
        // eslint-disable-next-line
        setRandomBeerQuery(new Object('https://api.punkapi.com/v2/beers/random'));
        console.log(randomBeerQuery)
    }
    const resetSearcher = () => {
        setQuery(initalQuery);
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
                    <Button type="button" onClick={resetSearcher}>All Beers</Button>
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

