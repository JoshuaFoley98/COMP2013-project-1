// this is the primary logical component
// handles all states and functions needed to get the app working
//imports data from ./data/products.jsx
//passing it to the inventory component

//exports to: App.jsx
//imports from: ProductsContainer.jsx, NavBar.jsx, CartContainer.jsx

import { useState } from "react"
import ProductsContainer from "./ProductsContainer"
import NavBar from "./NavBar"
import CartContainer from "./CartContainer"

export default function GroceriesAppContainer({data}){
    

    /*
    current thinking, if we're working with a map of data,
    quantity is in data already, but it's a string for grams, miligrams and liters
    i'm gonna have to make a new variable for that then?

    */
    const [productAmount, setProductAmount] = useState(data.map((prod) => {
        return {
            id: prod.id,
            //maybe i can declare it here and set the value
            //we're calling it "amount" because synonyms
            amount: prod.amount = 0
        }
    }))

    //making cart an empty array
    const [cart,setCart] = useState([])
    
    //trying to add the amount,
    //taking product id
    const handleAddAmount = (productID) => {
        //the newAmount will equal the product amount if..
        const newAmount = productAmount.map((prod) => {
            //if the ids match, that way everything doesn't increase
            if (prod.id === productID) {
                //returning the prod with the amount increased by 1
                return{...prod, amount: prod.amount +1}
            }
            //always return prod
            return prod;
        })
        //amount becomes the new amount which is just prod.amount +1
        setProductAmount(newAmount);
        return;
    }
    

    //with the amount not showing between the buttons,
    //i'm going to try to add the cart next
    const handleAddToCart = (productID) => {
        //searching through the data where the product to add 's id is the same as the product in data
        //and assigning that to the current product
        const currentProduct = data.find((prod) => prod.id === productID)

        //making sure item isn't in cart already
       const productInCart = cart.find((item) => item.id === productID)

       //if the product isn't in the cart
        if(!productInCart) {
            //let's set the cart state by adding the current product to the previous cart
            setCart((previousCart) => {
                return[...previousCart, { ...currentProduct}]
            })
        }
        else {
            alert ("item in cart already")
        }

    }


    //let's remove selected item from cart
    const handleRemoveFromCart = (cartItem) => {
        //filter for unmatching id and make that a new variable
    
        const filteredCart = cart.filter((item) => item.id !== cartItem.id);
        //set the cart to new variable
        setCart(filteredCart);
    }

    return <div> 
        <div>
            <NavBar cartlength = {cart.length}/>
        </div>
        <div className="GroceriesApp-Container">
        <div>
        <ProductsContainer 
        data = {data} 
        productAmount = {productAmount}
        setProductAmount = {setProductAmount}
        handleAddAmount = {handleAddAmount}
        handleAddToCart={handleAddToCart}
        />
        </div>
        <div className="CartContainer">
        <p>Cart Items: {cart.length}</p>
        <p>{cart.length === 0 && "No items in Cart"}</p>
        <CartContainer cart = {cart} handleRemoveFromCart = {handleRemoveFromCart}/>
        </div>
        </div>

    </div>
}