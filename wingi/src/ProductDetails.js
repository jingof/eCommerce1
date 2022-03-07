import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';

const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const history = useHistory();
    let products = JSON.parse(localStorage.getItem("eCommerceProducts"));
    
    useEffect(() => {
        setProduct(products.find(prod => prod.id == id))
        setIsPending(false);
    }, [])
    
    const handleClick = () => {
        let ind = products.findIndex(prod => prod.id == id) 
        if (ind > -1) {
            products.splice(ind, 1);
          }
          localStorage.setItem("eCommerceProducts",JSON.stringify(products));
        history.push("/");
    }
    return (
        <div className="product-details">
            {isPending && <div>Still Loading..</div>}
            {!product && <div>Item Not Found</div>}
            {product && (
                <article>
                    <h2>{product.name}</h2>
                    <p>{product.category}</p>
                    <div className="img-cover" style={{
                        height: '80%',
                    }}>
                        <img src={require(`${product.path}`)} alt="" />
                    </div>
                    <div className="description">{product.description}</div>
                    <p className="price"><b>US $ </b>{product.price}</p>
                    <p className="rating">{product.rating}/5</p>
                    <br />
                    <button onClick={handleClick}><b>Delete</b></button>        
                </article>
            )}
        </div>

    );
}

export default ProductDetails;