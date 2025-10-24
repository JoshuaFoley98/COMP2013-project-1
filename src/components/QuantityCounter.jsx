//presentational component
//displays:
//      number of items for each product
//has a button to increase the amount 
//another button to decrease the number of products

//NOTE:
/*
    products cannot be set to a value of 0 or less in the ProductCard
    cannot be set to value of 1 or less in the CartCard

*/
import { useState } from "react"

export default function QuantityCounter({
    productAmount,
    handleAddAmount, 
    handleRemoveAmount,
    id, 
    mode}
){
    return <div className="ProductQuantityDiv">
        <button onClick={() => handleRemoveAmount()}>
            -
        </button>
        <p>{/*productAmount*/}</p>
        <button onClick={() => handleAddAmount()}>
            +
        </button>
    </div>
}