import logo from './logo.svg';
import './App.css';
import AddProduct from './components/AddProduct';
import SearchField from './components/SearchField';
import ShoppingCart from './components/ShoppingCart';

function App() {
  return (
    <div >
     <AddProduct />
     <SearchField />
     <ShoppingCart />
    </div>
  );
}

export default App;
