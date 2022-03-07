import './App.css';
import Navbar from './Navbar';
/*import Home from './Home';*/
import HomeJson from './HomeJson';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';
import AddProduct from './AddProduct';
import BlogDetails from './BlogDetails';
import ProductDetails from './ProductDetails';
import NotFound from './NotFound';
import ViewProducts from './ViewProducts';
import JsonData from './data/productsDb.json';
import ModifyProducts from './ModifyProducts ';


const { products } = JsonData;     
if(!localStorage.getItem('eCommerceProducts'))
{
    localStorage.setItem("eCommerceProducts",JSON.stringify(products));
}

function App() {

  return (
    <Router>
      <div className="App">
        <Navbar title="Home" />
        <div className='Content'>
          <Switch>
            <Route exact path="/">
              <HomeJson />
            </Route>
            <Route path="/products/:id">
              <ProductDetails />
            </Route>
            <Route path="/addItem/">
              <AddProduct />
            </Route>
            <Route path="/viewproducts">
              <ViewProducts />
            </Route>
            <Route path="/modifyproducts">
              <ModifyProducts />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
