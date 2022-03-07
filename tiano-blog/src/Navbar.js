import { Link } from 'react-router-dom';

const Navbar = ({title}) => {

    return ( 
        <nav className="navbar">
            <h1>Trade It</h1>
            <div className="links">
            
            <Link to="/">Home</Link>
            {/* <Link to="/create">Create</Link> */}
            <Link to="/addItem">Add Item</Link>
            <Link to="/viewproducts">View</Link>
            <Link to="/modifyproducts">Modify</Link>
            

                
            </div>
        </nav>
        
    )   
}
 
export default Navbar;



/*
{navItems.map((item) => (
                
               
                <a href="#">{item}</a>
                   
                
                
            ))}
<nav className="navbar">
            <h1>The Tiano Blog</h1>
            <div className="links">

                <a href="#">Home</a>
                
                {/*<a href="/create"style={{
                    color:"white",
                    backgroundColor: '#f1356d',
                    borderRadius: '8px'
                }}>New Blog</a>*}
                <a href="#">Blog</a>

                //<a href="#">Home</a>
                
                {/*<a href="/create"style={{
                    color:"white",
                    backgroundColor: '#f1356d',
                    borderRadius: '8px'
                }}>New Blog</a>*}
                //<a href="#">Blog</a>
                
            </div>
        </nav>*/