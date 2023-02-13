import "assets/css/app.css";
import Provider from "helpers/hooks/useGlobalContext";
import Cart from "pages/Cart";
import Congratulation from "pages/Congratulation";
import Details from "pages/Details";
import HomePage from "pages/HomePage";
import NotFound from "pages/NotFound";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/categories/:idc" exact element={<Details />} />
          <Route path="/categories/:idc/products/:idp" element={<Details />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/congratulation" element={<Congratulation />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
