import { useState } from "react";
import { useHistory } from 'react-router-dom';
const AddProduct = () => {

    let products = JSON.parse(localStorage.getItem("eCommerceProducts"));
    const [product, setProduct] = useState({name:"", price:"", quantity:"", description:"", category:"",
                                            year:"", rating:"", path:"./img/shoes1.jpg", id:0});
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();
    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct(prevState => ({
            product: {                   
                ...prevState.product,    
                [name]: value       
            }
        }))
    };  


    const handleSubmit = (e) => {
        setIsPending(false);
        e.preventDefault();
        product.product.id = products.length+1;
        product.product.path = "./img/shoes1.jpg"
        products.push(product.product);
        localStorage.setItem("eCommerceProducts",JSON.stringify(products));
        //console.log(products);
        history.push('/');
    }

    return ( 
        <div className="create">
            <h2>Add a New Product</h2>
            <form onSubmit={handleSubmit}>

                <label>Name</label>
                <input type="text" 
                required 
                name="name"
                value={product.name}
                onChange={(e)=>handleChange(e)}
                />

                <label>Price</label>
                <input type="number" 
                required
                name="price"
                value={product.price}
                onChange={(e)=>handleChange(e)}
                />

                <label>Quantity</label>
                <input type="number" 
                required
                name="quantity"
                value={product.quantity}
                onChange={(e)=>handleChange(e)}
                 />

                <label>Description.</label>
                <textarea 
                required
                name="description"
                value={product.description}
                onChange={(e)=>handleChange(e)}
                 />

                <label>Category.</label>
                <select 
                required 
                name="category"
                value={product.category}
                onChange={(e)=>handleChange(e)}
                >
                    <option></option>
                    <option value="Accessories">Accessories</option>
                    <option value="Trousers">Trousers</option>
                    <option value="Upper Wear">Upper Wear</option>
                    <option value="Bathroom Utilities">Bathroom Utilities</option>
                </select>

                <label>Year of Manufactury</label>
                <input type="text" 
                required
                name="year"
                value={product.year}
                onChange={(e)=>handleChange(e)}
                 />

                <label>Rating( of 5)</label>
                <input type="text" 
                required
                name="rating"
                value={product.rating}
                onChange={(e)=>handleChange(e)}
                 />

                <label>Image</label>
                <input type="file" 
                required 
                // name="image"
                // value={product.name}
                // onChange={(e)=>handleChange(e)}
                />
                {!isPending && <button>Add Product</button>}
                {isPending && <button disabled>Adding product ...</button>}
            </form>
        </div>
     );
}
 
export default AddProduct;