import React from 'react'
import './explorer-styles.scss';
import Button from '../../components/Button/Button'
import BeerList from '../../components/BeerList/BeerList'


const Explorer = props => {
    return (
        <section className="explorer">
            <div className="leftContent">
                <form className="searcher">
                    <label className="label" htmlFor="name">Name
                        <input className="input" type="text" name="name" />
                    </label>
                    <label className="label" htmlFor="yeast">Yeast
                        <input className="input" type="text" name="yeast" />
                    </label>
                    <label className="label" htmlFor="hops">Hops
                        <input className="input" type="text" name="hops" />
                    </label>
                    <label className="label" htmlFor="malt">Malt
                        <input className="input" type="text" name="malt" />
                    </label>
                    <label className="label" htmlFor="food">Food
                        <input className="input" type="text" name="food" />
                    </label>
                    <Button type="submit">Search</Button>
                </form>
                <Button type="button">Random Beer</Button>
            </div>
            <div className="rightContent">
              <BeerList></BeerList>
            </div>
        </section>
    )
}

export default Explorer;

