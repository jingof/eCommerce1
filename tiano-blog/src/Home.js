import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import ProductList from "./ProductList";

const Home = () => {
    const [blogs, setBlogs] = useState([
        {title:'My new Site', body:'The start of something great.', author:'Francis', id: 1},
        {title:'Lets go Poetry', body:'Greatness is depicted in starting', author:'Tiano', id: 2},
        {title:'Hmm... religion', body:'Something knows no bounds, God.', author:'Jingo', id: 3}
    ]);
    const [products, setProducts] = useState([
        {name:'Men\'s shoes', price:40, rating:4, year:2020, path:"./img/shoes1.jpg", id: 1},
        {name:'Jeans', price:30, rating:3.1, year:2022, path:"./img/shoes2.jpg", id: 2},
        {name:'Watches', price:25, rating:3, year:2021, path:"./img/shoes3.jpg", id: 3},
        {name:'Jackets', price:28, rating:5, year:2022, path:"./img/shoes1.jpg", id: 4},
        {name:'Belts', price:41, rating:4, year:2020, path:"./img/shoes2.jpg", id: 5},
        {name:'T shirts', price:35, rating:4.5, year:2021, path:"./img/shoes3.jpg", id: 6},
        {name:'UnderShirts', price:30, rating:4, year:2021, path:"./img/shoes1.jpg", id: 7},
        {name:'Casual Pants', price:50, rating:3.1, year:2020, path:"./img/shoes2.jpg", id: 8},
        {name:'Colognes', price:72, rating:3.5, year:2022, path:"./img/shoes3.jpg", id: 9},
        {name:'Vaseline', price:20, rating:5.6, year:2020, path:"./img/shoes1.jpg", id: 10},
        {name:'Soap', price:15, rating:4, year:2021, path:"./img/shoes2.jpg", id: 11}
    ]);

    useEffect(() => {
        console.log("use Effect run"); 
    }, []);
    /*const[name, setName] = useState('Tiano');
    const[age, setAge] = useState(25);
    const handleClick = () => {     
        if(name == 'Tiano')
        {
            setName('Francis');
            setAge(25);
        }
        else
        {
            setName('Tiano');
            setAge(27);
        }
    }
    const handleClickAgain = (name) => {
        console.log("Hello, "+name);
    }*/
    const handleBlogDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }
    const handleAllBlogsDelete = () => {
        const newBlogs = [];
        setBlogs(newBlogs);
    }

    const handleProductDelete = (id) => {
        const newProducts = products.filter(product => product.id !== id);
        setProducts(newProducts);
    }
    
    return ( 
        <div className="home">        
            <br/>       
            <BlogList blogs={blogs}  
                      title="Home Page" 
                      handleBlogDelete = {handleBlogDelete}
                      handleAllBlogsDelete = {handleAllBlogsDelete}/>
            <ProductList products={products} 
                         title="Products" 
                         handleProductDelete={handleProductDelete}/>
            <br />
            <ProductList products={products.filter((product) => product.year===2022)} 
                         title="New Arrivals"
                         handleProductDelete={handleProductDelete}/>
            </div>
     );
}
 
export default Home;