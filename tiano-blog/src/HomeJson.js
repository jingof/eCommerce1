
import ProductList from "./ProductList";

const HomeJson = () => {
    let products = JSON.parse(localStorage.getItem("eCommerceProducts"));
    
    return ( 
        <div className="home">        
                      
            {/* {waiting && <div>Still Loading ...</div>}   */}
            {!products && <div>Item not Found.</div>}
            {products && <ProductList products={products} title="Our Products." />}
            {products && <ProductList products={products.filter((product) => product.year==2022)} 
                    title="New Arrivals." />}
                      
            </div>
     );
}
 
export default HomeJson;