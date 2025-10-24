//presentation component 
//renders all products cards from the data passed into by parent component 
// exported to GroceriesAppContainer.jsx
// imports: ProductCard.jsx

import ProductCard from "./ProductCard";

export default function ProductsContainer(
    {data, productAmount, handleAddAmount, handleAddToCart}){
 
    
    return <div className="ProductsContainer">
        
        {data.map((product) => (
            <ProductCard 
            key={product.id} 
            {...product} 
            productAmount = {productAmount} handleAddAmount = {handleAddAmount} handleAddToCart={handleAddToCart}
            />
        ))}
    </div>
}