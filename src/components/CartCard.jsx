//presentational component
//displays
//  image of product
//  price
//  quantity
//  subtotal
//features Quantity counter component, enabling user to edit quantity of the same product they've added to the card
//and a 'remove item' button removing item from cart

import QuantityCounter from "./QuantityCounter";

/*NOTE: PRODUCTS CANNOT BE SET TO A VALUE OF 1 OR LESS IN THE CARTCARD */


//exports to: CartContainer.jsx
// imports: QuantityCounter.jsx

export default function CartCard({id, productName, image, productAmount,price, handleRemoveFromCart }){
    return<div className="CartCard">
        <h2>{productName}</h2>
        <img src={image} />
        <p> price: {price}</p>
        <button className="RemoveButton" onClick={() => handleRemoveFromCart({id, productName, image, price})}>Remove</button>
    </div>
}