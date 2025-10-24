//presentation componenet
//will render the list of items chosen by the user. 
// if the cart is empty, the component will show "No Items in the cart"
//otherwise, it will display the number of items in the cart. with each item represented by a CartCard component
//end of cart list has 2 buttons:
//      button 1. empty cart button. when clicked, the cart empty.
//      button 2. buy button that shows the total price (not actually functional)

import CartCard from "./CartCard";

//exports to: GroceriesAppContainer.jsx
//imports: cartcard.jsx

export default function CartContainer({cart, handleRemoveFromCart} ){
    return <div>
        {cart.map((item) => <CartCard key={item.id} {...item}  handleRemoveFromCart = {handleRemoveFromCart}/>)}
        
    </div>
}