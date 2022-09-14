import "./App.css";
import Home from "./components/routes/home";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/routes/navigation";
import Authentication from "./components/authComponent/authentication";
import ShopComponent from "./components/shop/shop.component";
import CheckoutComponent from "./components/routes/checkout/checkout.component";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="shopComponent/*" element={<ShopComponent />} />
          <Route path="authentication" element={<Authentication />} />
          <Route path="checkout" element={<CheckoutComponent />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
