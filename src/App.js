
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
// import {
//   BrowserRouter as Router,
//   Route,
//   Switch,
//   Link,

// } from "react-router-dom";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Order from './components/Order/Order';
import Manage from './components/Manage/Manage';
import NotFound from './components/NotFound/NotFound';
import ProductDetails from './components/ProductDetails/ProductDetails';

function App() {
  return (
    <div >
      <Header></Header>

      {/* <Router>
        <Switch>
          <Route path=""><Shop></Shop></Route>
          <Route path='/order'><Order></Order></Route>
        </Switch>
      </Router> */}

      <BrowserRouter>
        <Routes>
          <Route path="/shop" element={<Shop />} />
          <Route path="order/" element={<Order />} />
          <Route path='manage/' element={<Manage />} />
          <Route path='/product/:productKey' element={<ProductDetails />} />
          <Route exact path='/' element={<Shop />} />

          <Route path='*' element={<NotFound />} />



        </Routes>
      </BrowserRouter>





    </div>
  );
}

export default App;
