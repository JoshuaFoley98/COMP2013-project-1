//pretentation component
//displays a single card with required elements
// contains a quantity counter component allowing the user to add multiple instances of same product to cart
//component has an "add to cart" button
//when user clicks on it, the products and chosen quantities will be added to the cart.
//cart should be updated added amount if product exists in cart already.
//for example, if the coca-cola product has two quantities in the card, and you add a coca-cola  product with 3 quantities, updates to 5
//if the user attempts to add a product with zero items, an alert should be displayed. prompting the user to enter a quantity first

import QuantityCounter from "./QuantityCounter";


/*NOTE: PRODUCTS CANNOT BE SET TO A VALUE OF 0 OR LESS */

//exported to: products container
//imports: quantity counter

export default function ProductCard({
    id,
    productAmount,
    image,
    productName,
    brand,
    price,
    handleAddAmount,
    handleAddToCart}){
    
    return <div className="ProductCard">
        
        
        <p>{productName}</p>
        <img src={image}></img>
        <p>{brand}</p>

        {/* still called quantity counter, because that's what it is in the pdf */}
        {/*still doesn't want to work. so commented it out */}
        {/*<QuantityCounter productAmount={productAmount} handleAddAmount = {handleAddAmount}/>*/}
        <button onClick={() => handleAddToCart(id)}>Add To Cart</button>
        <p>{price}</p>

    </div>
}
