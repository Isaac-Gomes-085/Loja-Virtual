import { useState } from "react";
import { NoPage } from "./components/NoPage";
import Carrinho from "./components/carrinho/carrinho";
import { Catalago } from "./components/catalago/catalago";
import Layout from "./components/layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [carrinho, setCarrinho] = useState([]);
  function addToCart(item) {
    setCarrinho([...carrinho, item]);
    alert('You add to your cart!')
  }

  // function removeCart() {
    
  // }
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              path="/catalago"
              element={<Catalago addToCart={addToCart} />}
            />
            <Route
              path="/carrinho"
              element={<Carrinho carrinho={carrinho} />}
            />
          </Route>
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
