
import {useState } from 'react'
import { StarsRating } from './StarsRating.component'

export function Product({ img, name, price, rating, isNew}) {
    const [isLike, setIsLike] = useState(false)
    const [isAddToCart, setIsAddToCart] = useState(false)


    const addToCard = (e) => {
        e.preventDefault()
        setIsAddToCart(true)
    }

    const doLike = (e) => {
        e.preventDefault()
        setIsLike(!isLike)
    }
    
    return (
        <div className="product">
            <button className={"button-like "+(isLike? 'like':'')} onClick={doLike}>{ isLike ? "❤": "♡"}</button>
            {isNew && <label className='is-new'> new </label>}
            <div className={'image '}>
                <img src={img}  />
            </div>
            {isAddToCart && <div className={ isAddToCart ? ' image add-to-cart':""}>
                <img src={img}  />
            </div>}
            
            <div className="product-info">
                <div className='row'>
                    <StarsRating rating={rating}/>
                    <label>{name}</label>
                    <label>{price} &#8362; </label>
                </div>
                <button onClick={addToCard}>
                    <label >
                        {!isAddToCart ? "הוסף לסל": "קיים 1 בסל"}
                </label> 
                </button>
            </div>
        </div>
    )
 }