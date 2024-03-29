import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  
} from "react-router-dom";
import { useSelector } from "react-redux";

const App = () => {
  const user = useSelector((state)=>state.user.currentUser);
  //이거 user=false로 해야 login됨
  return (<Router>
    <Routes>
      <Route exact path="/" element={<Home />}>
      </Route>
     
      <Route path="/products/:category" element={<ProductList />}>
      </Route>
      <Route path="/product/:id" element={<Product />}>
      </Route>
      <Route path="/cart" element={<Cart />}>
      </Route>
      <Route path="/login" element= {user ? <Navigate to="/"/> : <Login/>}>
      </Route>
      <Route path="/register" element={<Register/>}>
      </Route>
    </Routes>
  </Router>
  );
};


export default App;