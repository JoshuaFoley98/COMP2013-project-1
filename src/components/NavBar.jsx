//top presentation container
//displays:
//app title
//username greeter
//cart icon in ./assets/cart-empty changes to cart-full when full


//export to: groceries app container
export default function NavBar({ cartlength}){
    return <div className="NavBar">
            {/*i'l figure out a custom username later */}
            <p className="NavTitle">Hello!</p>
            <h1 className="NavTitle">Groceries App 🍊</h1>
            <p className="NavCart"> 
                {/* ternary changing the cart png based on the cart length */}
                <img src={cartlength === 0? "./src/assets/cart-empty.png" : "./src/assets/cart-full.png"} />
            </p>
    </div>
}

/*
    relevant tags:
    root
    navbar
    NavDiv
    NavTitle
    NavCart
    NavUser
    img
    #root { width: 100%; max-width: 1200px; min-width: 1150px; margin: 0 auto; padding: 2rem; text-align: center;}
    .NavBar {background-color: rgb(76, 43, 226);display: flex;justify-content: space-between;align-items: center;padding: 10px;border-radius: 8px;height: 100%;}
    .NavDiv {width: 33%;}
    .NavTitle {  display: flex;  justify-content: center;  align-items: center;}
    .NavCart {text-align: right; padding: 0 10px;}
    .NavUser {text-align: left;padding: 0 10px;}
    img {height: 50px;border-radius: 5px;}
*/