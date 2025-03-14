import { createRoot } from "react-dom/client";
import "./index.scss";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import AuthContext from "./context/AuthContext.jsx";
import ProductContext from "./context/ProductContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AuthContext>
      <ProductContext>
        <App />
      </ProductContext>
    </AuthContext>
  </BrowserRouter>
);
