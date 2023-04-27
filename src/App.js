import MenuPage from './mainComps/menuPage'
import ProductPage from './productComps/productPage';
import PurchasesPage from './purchaseComps/purchasesPage';
import './App.css';
import CustomersPage from './customerComps/customersPage';
import { Routes, Route, useLocation} from 'react-router-dom';
import NavBarComp from './mainComps/navigation/navBar';
import BackComp from './mainComps/navigation/backComp';
import EditProductPage from './productComps/editProductPage';
import EditCustomerPage from './customerComps/editCustomerPage';
import PurchaseAdder from './purchaseComps/purchaseAdder';

function App() {
  const location = useLocation();
  const shouldRenderNavBar = location.pathname === '/products'
   || location.pathname === '/customers' || location.pathname === '/purchases';
  const shouldRenderBackComp = location.pathname === '/';
  return (
    <div className="App">
      {shouldRenderNavBar ? <NavBarComp /> : shouldRenderBackComp? '':<BackComp/>}
      <Routes>
        <Route path='/' element={<MenuPage/>}/>
        <Route path='/products' element={<ProductPage/>}/>
        <Route path='/products/:id' element={<EditProductPage/>}/>
        <Route path='/customers' element={<CustomersPage/>}/>
        <Route path='customers/:id' element={<EditCustomerPage/>}/>
        <Route path='/purchases' element={<PurchasesPage/>}/>
        <Route path='/purchases/addNew' element={<PurchaseAdder/>}/>
      </Routes>
    </div>
  );
}

export default App;
